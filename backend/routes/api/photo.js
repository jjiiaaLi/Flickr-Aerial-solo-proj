const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Photo} = require ('../../db/models');

router.get('/', asyncHandler(async(req,res)=>{
    const photos = await Photo.findAll();
    setTimeout(()=>{
        res.json(photos);
    },5000)

}))

router.get('/:id',asyncHandler(async(req,res)=>{
    const id = req.params.id;
    
    const photo= await Photo.findByPk(id)
    res.json(photo)
}))
module.exports = router;