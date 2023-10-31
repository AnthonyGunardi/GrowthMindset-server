const User = require('../model/user');

exports.register = async (req,res,next)=>{
    try {
        const {
          usia, departemen, skor_tes, persentase_growthMindset, penjelasan_skor
        } = req.body
 
        // const user = await User.findOne({nama_perusahaan, nama_peserta})
        // if (user) {
        //     return res.status(401).json({message:"User already exist!"})
        // }
        const newUser = await User.create({ usia, departemen, skor_tes, persentase_growthMindset, penjelasan_skor })
        return res.status(201).json(newUser)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}