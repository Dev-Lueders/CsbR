const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User schema for MongoDB
const clientSchema = new Schema({
  customId: {
    type: String,
    required: true,
    unique: true
  }, // This will be the UUID
  mongoId: {
    type: Schema.Types.ObjectId,
    ref: "Client_model"
  }, // Mongo ObjectId, for reference

  created_time: { type: Date, default: Date.now },
  updated_time: { type: Date, default: Date.now },

  primary_System: { type: String, required: true },
  primary_GamerTag: { type: String, required: true },
  UGC_siteTag: { type: String, required: true },

  // Role fields
  isMaster: { type: Boolean, default: false }, // Master Role
  isMember: { type: Boolean, default: false }, // Member Role
  isClient: { type: Boolean, default: false }, // Client Role
  isModerator: { type: Boolean, default: false }, // Moderator Role
  isGuest: { type: Boolean, default: false }, // Guest Role
  isAdmin: { type: Boolean, default: false }, // Admin Role
  isActive: { type: Boolean, default: true }, //isActive for delete account or 
  isSuspended: { type: Boolean, default: false }, // a flag for violators and more direct targeting of a user other options than activated or not 
  address: {
    street: String,
    apartNo: String,
    city: String,
    zip_code: String,
    country: String,  
  },
  dob: { type: Date },
});

// Middleware to update the 'updated_time' on every modification
clientSchema.pre("save", function (next) {
  this.updated_time = Date.now();
  next();
});

// Create the model using the schema
const Client_model = mongoose.model("Client_model", clientSchema);

module.exports = Client_model;
