const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    nama_peserta:{
      type:String,
      required:true,
    },
    jabatan_peserta:{
      type:String,
      required:true,
    },
    nama_perusahaan:{
      type:String,
      required:true,
  },
    nomor_hp:{
      type:String,
      required:true,
    }
});

module.exports = mongoose.model('Users',userSchema);