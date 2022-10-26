import mongoose from "mongoose";

const tutorSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  teaching: {
    type: [Number],
    default: [],
  },
});

const Tutor = mongoose.model("Tutor", tutorSchema);
export default Tutor;
