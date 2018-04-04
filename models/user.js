// user model
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
  googleId: { type: String, unique: true },
  email: { type: String, unique: true, lowercase: true },
  password: String,
  firstName: String,
  lastName: String
});

userSchema.pre("save", async (next) => {
  if(this.password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt, null);
    this.password = hash;
  }
  next();
})

userSchema.methods.comparePassword = async (candidatePassword, callback) => {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  callback(null, isMatch);
}

mongoose.model("users", userSchema);
