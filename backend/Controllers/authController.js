import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

console.log("authController.js is imported!");

export const register = async (req, res) => {
  const { email, password, name, gender } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash du mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Création de l'utilisateur
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      gender,
      role: "patient", // Définir le rôle comme patient
    });

    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error, Try again" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur est un médecin
    const doctor = await Doctor.findOne({ email });

    if (doctor) {
      // Comparer le mot de passe du médecin
      const isPasswordMatch = await bcrypt.compare(password, doctor.password);

      if (!isPasswordMatch) {
        return res
          .status(400)
          .json({ status: false, message: "Invalid credentials" });
      }

      // Générer le token pour le médecin
      const token = generateToken(doctor);
      const { password: _, ...doctorData } = doctor.toObject();
      return res.status(200).json({
        status: true,
        message: "Successfully login",
        token,
        data: doctorData,
        role: "doctor",
      });
    }

    // Si ce n'est pas un médecin, alors c'est un patient
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Comparer le mot de passe du patient
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    // Générer le token pour le patient
    const token = generateToken(user);
    const { password: _, ...userData } = user.toObject();
    return res.status(200).json({
      status: true,
      message: "Successfully login",
      token,
      data: userData,
      role: "patient",
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
