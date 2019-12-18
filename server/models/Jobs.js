import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    position: { type: String, required: true, maxlength: 20 },
    wage: { type: String, required: true },
    hours: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
