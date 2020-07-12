var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
    _id: { type: objectId, auto: true },
    personalDeatails: { type: Array, required: true },
    otherDetails: { type: Array },
}, {
    versionKey: false
});

var user = mongoose.model('users', userSchema);

module.exports = user;