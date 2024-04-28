import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import bookingRoutes from "./Routes/bookingRoutes.js";
import Doctor from "./models/DoctorSchema.js"; // Importez le modèle DoctorSchema

dotenv.config();
console.log("MONGO_URL: ", process.env.MONGO_URL);

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

// Connexion à la base de données MongoDB
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");

    // Vérifier si un médecin existe déjà
    const existingDoctor = await Doctor.findOne();

    // Si aucun médecin n'existe, ajoutez-en un
    if (!existingDoctor) {
      const newDoctor = new Doctor({
        email: "doctor@gmail.com",
        password: "doctor123",
      });

      await newDoctor.save();
      console.log("Nouveau médecin ajouté avec succès");
    } else {
      console.log("Un médecin existe déjà dans la base de données");
    }
  } catch (err) {
    console.log("MongoDB database not connected");
  }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctor", doctorRoute); // kenet doctors badeltha doctor
app.use("/api/bookings", bookingRoutes);

// Lancer le serveur
app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
