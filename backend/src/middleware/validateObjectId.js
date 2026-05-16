import mongoose from 'mongoose';

export const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  
  // Skip validation for offline note IDs (they start with 'offline_')
  if (id && id.startsWith('offline_')) {
    return next();
  }
  
  // If there's an ID parameter and it's not a valid ObjectId
  if (id && !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ 
      message: "Note not found",
      note: "Invalid ID format - this might be an offline note that hasn't synced yet"
    });
  }
  
  next();
};