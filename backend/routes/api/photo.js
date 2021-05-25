const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Photo} = require ('../../db/models');

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
    const { source, userId, tagId, caption } = req.body.data;
    console.log('hello');
    tagId++;
    await Photo.create({
      source,
      userId,
      tagId,
      caption,
    });
    res.redirect('/')
}))

module.exports = router;