const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Album } = require("../../db/models");

router.get('/',asyncHandler(async(req,res)=>{
    const albums=await Album.findAll();

    res.json(albums)

}))

router.post('/', asyncHandler(async(req,res)=>{
    const {name,userId,photos}=req.body

    const newAlbum=await Album.create({
        name,userId,photos
    })
    res.json(newAlbum);
}))




module.exports = router;
