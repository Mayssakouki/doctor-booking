import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    default: "doctor@gmail.com",
  },
  password: {
    type: String,
    required: true,
    default: "doctor123",
  },
  role: {
    type: String,
    default: "doctor",
  },
});

//export default mongoose.model("Doctor", doctorSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
