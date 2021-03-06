const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {Comment} = require('../../db/models');


router.get('/:photoId',asyncHandler(async(req,res)=>{
    const photoId=req.params.photoId;

    const comments = await Comment.findAll({
        where:{photoId:photoId}
    })
    res.json(comments)
}))

router.post('/:photoId',asyncHandler(async(req,res)=>{
    const photoId=req.params.photoId
    const {newComment,userId,id}=req.body;
    const content=newComment;
    console.log()
    const comment = await Comment.create({content,userId,photoId})
    
    return res.json(comment)
    
}))


module.exports = router;