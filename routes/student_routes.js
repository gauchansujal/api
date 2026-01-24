const express = require("express");
const router = express.Router();
// const upload = require("../middleware/uploads");
const { protect } = require("../middleware/auth");

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  loginStudent,
  uploadProfilePicture,
} = require("../controllers/student_controller");

// ← Add this diagnostic block
console.log("DEBUG: Imported controller →", {
  createStudent:       typeof createStudent       === 'function' ? 'OK' : 'MISSING!',
  getAllStudents:      typeof getAllStudents      === 'function' ? 'OK' : 'MISSING!',
  getStudentById:      typeof getStudentById      === 'function' ? 'OK' : 'MISSING!',
  updateStudent:       typeof updateStudent       === 'function' ? 'OK' : 'MISSING!',
  deleteStudent:       typeof deleteStudent       === 'function' ? 'OK' : 'MISSING!',
  loginStudent:        typeof loginStudent        === 'function' ? 'OK' : 'MISSING!',
  uploadProfilePicture: typeof uploadProfilePicture === 'function' ? 'OK' : 'MISSING!',
});

// Routes...
router.post("/upload", upload.single("profilePicture"), uploadProfilePicture);
router.post("/", createStudent);
router.get("/", protect, getAllStudents);
router.post("/login", loginStudent);
router.put("/:id", protect, updateStudent);
router.delete("/:id", protect, deleteStudent);
router.get("/:id", getStudentById);

module.exports = router;