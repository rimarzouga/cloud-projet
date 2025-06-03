const mongoose=require('mongoose')

const OTPSchema = new mongoose.Schema({
    mobile: { type: String, required: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true }
  },{timestamps:true})

  module.exports = mongoose.model('OTP', OTPSchema)