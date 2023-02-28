import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ProductInfo } from '../atoms/Store/Products'
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Stylestore from '../atoms/Store/Storenav.module.css';
import { CartState } from '../atoms/Store/Products'

const Main = styled.div`
border:2px solid white;
width:94vw;
margin-top:3rem;
margin-left:2rem;
background-color:white;
`
const Navdiv=styled.div`
display: flex;
justify-content: center;
background-color: white;
color:red;
gap :2rem;
height:25.66rem;
margin-top: 2rem;

@media screen and (max-width: 780px) {
  height:15rem;
}

@media screen and (max-width: 450px) {
  height:8rem;
}
`
const Container=styled.div`
 display:grid;
 grid-template-columns:repeat(3,1fr);
 grid-gap:1rem;
 margin:25px 5rem auto;

 @media screen and (max-width: 780px) {
  
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-gap:1rem;
  margin:25px 5rem auto;

 }

`

const Section=styled.div`
height:26rem;
background-color:white;
display:flex;
flex-direction:column;
text-align: center;
box-shadow: 0px 0px 20px 1px black;
margin:2rem;
width:70%!important;
  
 
  

  img{
    width: 100%;
    height: 60%;
    object-fit: contain;
  }
  h5{
    font-size:1.5rem;
    color:black;
    margin:0;
    margin-top:1rem;

  }
  p{
    color:black
  }
  @media screen and (max-width: 780px) {
    height:19rem;
    width:70%!important;

      h5{
        font-size:1.5rem;
        color:black;
        margin:0;
        margin-top:1rem;
    
      }
      p{
        color:black
        margin:0rem!important;
      }
    
  }
`
const Section2=styled.div`
  padding:1rem;
  height:30rem;
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

const Store = () => {
  const Products = useRecoilValue(ProductInfo)
  const[data,setData]=useState([])
  const[all,setAll]=useState(true)
  
  function Alldata(idx){
    setAll(true)   
}
  function Macdata(idx){
      const item = Products.filter((e,i)=>e.category =="mac")
     
      setData(item)
      setAll(false)
  }
  function Iphonedata(idx){
    const item = Products.filter((e,i)=>e.category =="iphone")

    setData(item)
    setAll(false)
}
function Ipaddata(idx){
  const item = Products.filter((e,i)=>e.category=="ipad")
  setData(item)
  setAll(false)
}
function Watchdata(idx){
  const item = Products.filter((e,i)=>e.category =="watch")
  setData(item)
  setAll(false)
}
function Podsdata(idx){
  const item = Products.filter((e,i)=>e.category=="airpod")
  setData(item)
  setAll(false)
}
function Accessoriesdata(idx){
  const item = Products.filter((e,i)=>e.category =="accessories")
  setData(item)
  setAll(false)
}
function Tvdata(idx){
  const item = Products.filter((e,i)=>e.category=="Tv")
  setData(item)
  setAll(false)
}


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            display:"flex",
            justifyContent:"center",
            width:"100%",
          
          }}
        >
        <ul> {dots} </ul>
        </div>
      ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [cart, Setcart]=useRecoilState(CartState)
   console.log (cart)
  function Addtocart(e){
    Setcart([...cart ,...Products.filter((item,i)=>item.id == e.id)])
    // console.log(Products.filter((item,i)=>item.id == e.id))
    


  }
  // console.log(cart)

  return (
    <Main>
    <Navdiv>
    <div className={Stylestore.card}  onClick={(idx)=>Alldata(idx)} >
    <div className={Stylestore.text}>All</div>
    <img className={Stylestore.img} src={"https://www.apple.com/newsroom/images/product/availability/geo/Apple-September-2022-launch-hero-geo.jpg.landing-big_2x.jpg"}/>
    </div>
  <div className={Stylestore.card}  onClick={(idx)=>Macdata(idx)} >
    <div className={Stylestore.text}>Mac</div>
    <img className={Stylestore.img} src={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/macs_15022022.png?size=690:388"}/>
    </div>
  <div className={Stylestore.card} onClick={(idx)=>Iphonedata(idx)}>
    <div className={Stylestore.text}>iphone</div>
    <img className={Stylestore.img} src={"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_iPhone_13_Pro_color_lineup_2022.jpg"}/>
    </div>
  <div className={Stylestore.card} onClick={(idx)=>Ipaddata(idx)} >
    <div className={Stylestore.text}>ipad</div>
    <img className={Stylestore.img} src={"https://as-images.apple.com/is/refurb-ipad-air-wifi-green-2021_AV1?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1644268588850"}/>
    </div>
    <div className={Stylestore.card} onClick={(idx)=>Watchdata(idx)} >
    <div className={Stylestore.text}>Apple Watch</div>
    <img className={Stylestore.img} src={"https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020.jpg.landing-big_2x.jpg"}/>
    </div>
    <div className={Stylestore.card} onClick={(idx)=>Podsdata(idx)} >
    <div className={Stylestore.text}>Air Pods</div>
    <img className={Stylestore.img} src={"https://www.macworld.com/wp-content/uploads/2023/01/Which-AirPods-are-best-1.jpg?quality=50&strip=all&w=1024"}/>
    </div>
    <div className={Stylestore.card}onClick={(idx)=>Accessoriesdata(idx)} >
    <div className={Stylestore.text}>Accessories</div>
    <img className={Stylestore.img} src={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0Q2?wid=266&hei=291&fmt=png-alpha&.v=1649352718774"}/>
    </div>
    <div className={Stylestore.card} onClick={(idx)=>Tvdata(idx)} >
    <div className={Stylestore.text}>Tv</div>
    <img className={Stylestore.img} src={"https://9to5mac.com/wp-content/uploads/sites/6/2021/04/Apple-TV-compared.jpg?quality=82&strip=all"}/>
    </div>
    </Navdiv>
    <div>
    {
      all==true?<Container>
      {Products.map((e,idx)=>(
       <Section2 key={idx}>
       <h5>{e.name}</h5>
       <img src={e.pic}/>
       <p><CurrencyRupeeIcon sx={{fontSize:12,}}/>{e.price}</p>
       <button onClick={()=>Addtocart(e)}>Add</button>
       </Section2>
     ))}
     </Container>
     :
     <Slider {...settings}>
    {data.map((e,index)=>(
      <Section key={index}>
      <h5>{e.name}</h5>
      <img src={e.pic}/>
      <p><CurrencyRupeeIcon sx={{fontSize:12,}}/>{e.price}</p>
      <button onClick={()=>Addtocart(e)}>Add</button>
      </Section>
    ))}
    </Slider>
     

    }
    </div>
    </Main>
  )
}

export default Store;