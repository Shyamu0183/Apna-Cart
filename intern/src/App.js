import React,{ useState } from 'react'

import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import {AiOutlineShareAlt} from 'react-icons/ai'

import './App.css';

function App() {
const [Like,setLike] = useState(false);
let [Count,setCount] = useState(0);

const handleLikes = () =>{
  if(!Like){
    setLike(true)
setCount(Count+1)
  } else{
    setLike(false)
    setCount(Count-1)

  }
}

  const imgUrl = "https://images.unsplash.com/photo-1682685797168-613fd0cae41d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
  return (
    <>

<div className="main-container">
<h1 className='text-info'>Post Like and Unlike App</h1>
<h4>Likes Count :{Count} </h4>
<div className="card" style={{width:'18rem'}}
>
  <div className="card-header"> <BiUserCircle/>  UserName</div>
</div>
<div className="card-body"><img src={imgUrl} alt="post-img" height={"500px"} width={"500px"}/></div>
<div className="card-footer">
  {Like ? (
  <AiFillHeart 
  size={36} 
  className="text-danger" 
  onClick={handleLikes} 
  style={{cursor:"pointer"}}/>
  ) : (
  <AiOutlineHeart 
  size={36} 
  onClick={handleLikes}
  style={{cursor:"pointer"}}/>)}
&nbsp;&nbsp;

<AiOutlineComment size={36}/> &nbsp; <AiOutlineShareAlt size={36}/></div>
</div>
    </>
  );
}

export default App;
