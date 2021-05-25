const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Photo} = require ('../../db/models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op

router.get('/', asyncHandler(async(req,res)=>{
    const photos = await Photo.findAll();
    
    res.json(photos);
}))

router.get('/:id',asyncHandler(async(req,res)=>{
    const id = req.params.id;
    
    const photo= await Photo.findByPk(id)
    res.json(photo)
}))

router.post('/',asyncHandler(async(req,res)=>{
    
    let { source, userId, tagId, caption } = req.body;
    
    tagId++;
    const newPhoto=await Photo.create({
      source,
      userId,
      tagId,
      caption,
    });
    res.json(newPhoto)
    
}))

router.get('/search/:searchContent', asyncHandler(async(req,res)=>{
    const searchContent = req.params.searchContent;
    console.log(searchContent)
    const photos=await Photo.findAll({
        where:{
            caption:{
                [Op.substring]:searchContent
            }
        }
    })
    res.json(photos)
}))

module.exports = router;