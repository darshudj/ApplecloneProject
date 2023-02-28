import React from 'react'
import { useRecoilValue } from 'recoil'
import { CartState } from '../atoms/Store/Products'
import styled from 'styled-components'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Main=styled.div`
  display:flex;
  flex-direction:row;
  background:aquamarine;
  height:97vh;
  width:98vw;
  `
const Section2=styled.div`
  padding:5rem;
  height:20rem;
  width:10rem;
  border:8px solid black;
  background-color:white;
  display:flex;
  flex-direction:column;
  text-align: center;
  align-items:center;
  justify-content:center;
  box-shadow: 0px 0px 38px 1px black;
  img{
   
    max-width: 100%;
    height: 60%;
    object-fit: contain;
  }
  h5{
    font-size:1.5rem;
    color:black;

  }
  p{
    color:black
  }
  @media screen and (max-width: 780px) {
    height:15rem;
   
    h5{
      font-size:1rem;
    }
    img{
      max-width: 100%;
      height: 40%;
      object-fit: contain;
    }
    p{
      margin:0.5rem;
    }
     @media screen and (max-width: 450px) {
      
    height:9rem;
   
    h5{
      font-size:.6rem;
    }
    img{
      max-width: 100%;
      height: 40%;
      object-fit: contain;
    }
    p{
      margin:0.3rem;
      font-size:.6rem
    }
    button{
      width:50%;
      height:2rem;
      font-size:.3rem
    }
  }
  
  `
  const Buttons=styled.div`
  display:flex;
  gap:1rem;

  button{
    font-size:.7rem;
  }
  `

const Cart = () => {
 const Items =useRecoilValue(CartState)
 const [list, Setlist] = useState(Items);
 const navigate = useNavigate()

 console.log(list)
 function Removeitem(idx) {
 list.splice(i, 1);
 Setlist([...list]);

 
}
console.log(list)
  
 function Buyitems(){
  navigate("/register")
 }

  return (
    <Main>
   
    {Items.map((item ,idx)=>(
      <Section2 key={idx}>
      <h5>{item.name}</h5>
      <img src={item.pic}/>
      <p><CurrencyRupeeIcon sx={{fontSize:12,}}/>{item.price}</p>
      <Buttons>
      <button onClick={Buyitems}>Buy Now</button>
      <button onClick={() => Removeitem(idx)}>Remove</button>
      </Buttons>

      </Section2>
    ))}
    </Main>
  )
}

export default Cart