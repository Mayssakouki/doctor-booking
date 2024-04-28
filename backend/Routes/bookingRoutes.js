// booking.routes.js
import express from "express";
import bookingController from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/", bookingController.getBookings);
router.put("/:id", bookingController.updateBooking);

router.delete("/:id", bookingController.deleteBooking);
router.get("/doctor/:doctorId", bookingController.getDoctorBookings);
//router.put("/:id/accept", acceptAppointment);
//router.put("/:id/reject", rejectAppointment);
export default router;
