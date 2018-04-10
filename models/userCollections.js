const mongoose = require("mongoose");
const { Schema } = mongoose;

const userCollectionsSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: "users"},
  // TV
  tvCollections: [{type: Schema.Types.ObjectId, ref: "collections"}],
  tvWatchlist: {type: Schema.Types.ObjectId, ref: "collections"},
  tvSeen: {type: Schema.Types.ObjectId, ref: "collections"},
  tvFavorites: {type: Schema.Types.ObjectId, ref: "collections"},
  tvBlacklist: {type: Schema.Types.ObjectId, ref: "collections"},
  // Movies
  movieCollections: [{type: Schema.Types.ObjectId, ref: "collections"}],
  movieWatchlist: {type: Schema.Types.ObjectId, ref: "collections"},
  movieSeen: {type: Schema.Types.ObjectId, ref: "collections"},
  movieFavorites: {type: Schema.Types.ObjectId, ref: "collections"},
  movieBlacklist: {type: Schema.Types.ObjectId, ref: "collections"},
})

mongoose.model("userCollections", userCollectionsSchema);
