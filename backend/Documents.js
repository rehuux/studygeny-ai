// ===========================================
// backend/models/Document.js
// ============================================
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  filename: { type: String, required: true },
  originalName: String,
  filePath: String,
  extractedText: String,
  notes: Object,
  flashcards: Array,
  quizzes: Array,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);
