import React, { useState,useEffect } from 'react'
import axios from 'axios';
import "./style.css"
import { useParams } from "react-router-dom";
export default function OneImg() {
  const[img,setImg]=useState('');
  const id = useParams();
  useEffect(async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(response.data.results);
    setImg(response.data.results)
}, []);
  return (
    <div>
     <img className='imgg' src={img.image} />
     <h1>{img.name}</h1>
    </div>
  )
}
