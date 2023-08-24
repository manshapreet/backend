import mongoose from "../connection.js"

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique:true
  }
//   ,
//   artistName :{
//     type: String,
//     required: true,
//     unique: true
// }}
}
//   ,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
);

export const UrlModel = mongoose.model('Url', urlSchema);

//module.exports = UrlModel;
