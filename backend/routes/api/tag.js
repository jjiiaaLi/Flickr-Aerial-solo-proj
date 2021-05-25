const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Tag } = require("../../db/models");


router.get('/',asyncHandler(async(req,res)=>{
    const tags= await Tag.findAll();
    console.log(tags)
    res.json(tags)
}));


module.exports = router;