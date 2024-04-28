import Doctor from "../models/DoctorSchema.js";

const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findOne();
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getDoctor };
