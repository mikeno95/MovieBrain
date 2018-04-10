const mongoose = require("mongoose");
const { Schema } = mongoose;

const collectionSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "users" },
  name: String, // name of collection
  type: String, // (TV or Movie)
  checklist: Boolean, // (true = checklist, false = only seen)
  deletable: { type: Boolean, default: true },
  private: Boolean,
  list: [{ type: Schema.Types.ObjectId, ref: "media"}]
});

mongoose.model("collections", collectionSchema);
