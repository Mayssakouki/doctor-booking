import Booking from "../models/Booking.js";
import User from "../models/UserSchema.js";

const createBooking = async (req, res) => {
  try {
    // Ajouter le patientId à partir du corps de la requête
    const { email } = req.body;
    const patient = await User.findOne({ email: email });
    // Vérifier si le patientId est fourni
    if (!patient) {
      return res
        .status(404)
        .json({ success: false, error: "Patient Not found" });
    }

    // Créer la réservation avec le patientId
    const booking = await Booking.create({
      date: req.body.appointmentDate,
      patientId: patient.id,
      doctorId: "6612a547b4029af332628f0c",
      time: req.body.appointmentTime,
      status: "pending",
    });
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//const updateBooking = async (req, res) => {
// try {
//  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
//   new: true,
// });
// res.status(200).json({ success: true, data: booking });
//} catch (error) {
//  res.status(500).json({ success: false, error: error.message });
// }
//};

//const updateBooking = async (req, res) => {
//try {
//const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
//new: true,
//});
//res.status(200).json({ success: true, data: booking });
//} catch (error) {
//res.status(500).json({ success: false, error: error.message });
// }
//};

// bookingController.js

const updateBooking = async (req, res) => {
  try {
    const { appointmentDate, appointmentTime } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { date: appointmentDate, time: appointmentTime },
      { new: true }
    );
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
const getDoctorBookings = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const bookings = await Booking.find({ doctorId: doctorId });
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export default {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
  getDoctorBookings,
};
