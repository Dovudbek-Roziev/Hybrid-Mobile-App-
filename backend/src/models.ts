import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  displayName: { type: String, required: true, trim: true },
}, { timestamps: true });

const progressSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  lessonId: { type: String, required: true },
  completedAt: { type: Date, default: Date.now },
}, { timestamps: false });
progressSchema.index({ userId: 1, lessonId: 1 }, { unique: true });

export const User = mongoose.model('User', userSchema);
export const LessonProgress = mongoose.model('LessonProgress', progressSchema);
