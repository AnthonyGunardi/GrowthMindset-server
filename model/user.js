const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    nama_peserta:{
      type:String,
      default: ''
    },
    jabatan_peserta:{
      type:String,
      default: ''
    },
    nama_perusahaan:{
      type:String,
      default: ''
    },
    nomor_hp:{
      type:String,
      default: ''
    },
    usia:{
      type:String,
      required:true,
    },
    departemen:{
      type:String,
      required:true,
    },
    skor_tes:{
      type:String,
      default: '',
    },
    persentase_growthMindset:{
      type:String,
      default: '',
    },
    penjelasan_skor:{
      type:String,
      default: '',
    }
});

module.exports = mongoose.model('Users',userSchema);