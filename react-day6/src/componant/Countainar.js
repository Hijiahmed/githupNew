import axios from 'axios';
import React,{ useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { CardGroup ,Card} from 'react-bootstrap';
import "./style.css"
export default function Countainar() {
  const[api,setApi]=useState([])
  const history = useHistory()
    useEffect(async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character")
      console.log(response.data.results);
      setApi(response.data.results)
  }, []);
  const goToOneImg=(id)=>{
    history.push(`./OneImg/${id}`)
  }
  return (
    <div className='continar'>
{api.map((elm)=>{
        return(
          <div >
          <img className='imgg' src={elm.image} />
             <h1>{elm.name}</h1>
         <button onClick={(id)=>{goToOneImg(id)}}>
         {/* onClick={(id)=>{goToOneImg(id)}} */}
           {/* <Link to='./OneImg/id'></Link> */}
           go</button>
        </div>
        )
      })}
    </div>
  )
}
