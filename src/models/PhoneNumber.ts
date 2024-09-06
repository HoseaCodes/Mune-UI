import { Schema, model, models } from 'mongoose';

const phoneNumberSchema = new Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PhoneNumber = models.PhoneNumber || model('PhoneNumber', phoneNumberSchema);

export default PhoneNumber;
