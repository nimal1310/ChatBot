// import React from 'react'
// import {GoogleGenerativeAI} from '@google/generative-ai'
import {GoogleGenAI} from '@google/genai'



  // const API_KEY=process.env.G_API;
  const ai=new GoogleGenAI({apiKey:'AIzaSyAfZ0zcqyKw0FyjhfpFCOjoTyTwgZeyzMU'});

 

export const ChatResponse= async (userMsg)=>
{
try{
  // const model=genAI.getGenerativeModel({model:"gemini-2.0-flash"});
  // const result=await model.generateContent(userMsg);

  // const res=result.response;
  // const text=res.text();

  // return text;
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: userMsg,
  });
  return response.text;
}
catch(error){
     console.log('api error');
     return;
}
}
