import express from "express";
import dotenv from "dotenv";
//importing the model
import  OpenAi  from "openai";
import Post from "../mongodb/post.js";

dotenv.config();

const router=express.Router();


const openai = new OpenAi({ apiKey: process.env.OPENAI_APIKEY });

router.route('/').post(async (req,res)=>{
    try{
        const {prompt}=req.body;

        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
          });
          console.log(aiResponse);
        res.status(200).json({photo : aiResponse.data.data[0].b64_json});

    }catch(err){
          console.log(err);
          res.status(500).send(err);

    }
   
   


    



})



export default router;