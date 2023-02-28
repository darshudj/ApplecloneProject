import React from 'react'
import Stylestore from './Storenav.module.css'

const Storenav = () => {
  const Products = useRecoilValue(ProductInfo)
  console.log(Products)
  const[data,setData]=useState([])

  function Macdata(idx){
      const item = Products.filter((e,i)=>e.id =="mac")
      console.log(data)
      setData(item)
  }
  function Iphonedata(idx){
    const item = Products.filter((e,i)=>e.id =="iphone")
    console.log(data)
    setData(item)
}
function Ipaddata(idx){
  const item = Products.filter((e,i)=>e.id =="ipad")
  console.log(data)
  setData(item)
}
function Watchdata(idx){
  const item = Products.filter((e,i)=>e.id =="watch")
  console.log(data)
  setData(item)
}
function Podsdata(idx){
  const item = Products.filter((e,i)=>e.id =="airpod")
  console.log(data)
  setData(item)
}
function Accessoriesdata(idx){
  const item = Products.filter((e,i)=>e.id =="accessories")
  console.log(data)
  setData(item)
}
function Tvdata(idx){
  const item = Products.filter((e,i)=>e.id =="Tv")
  console.log(data)
  setData(item)
}
  return (
    <div className={Stylestore.container}>
    <div className={Stylestore.card} >
    <div className={Stylestore.text}>All</div>
    <img src={"https://www.apple.com/newsroom/images/product/availability/geo/Apple-September-2022-launch-hero-geo.jpg.landing-big_2x.jpg"}/>
    </div>
  <div className={Stylestore.card}  onClick={(idx)=>Macdata(idx)} >
    <div className={Stylestore.text}>Mac</div>
    <img src={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/macs_15022022.png?size=690:388"}/>
    </div>
  <div className={Stylestore.card} onClick={(idx)=>Iphonedata(idx)}>
    <div className={Stylestore.text}>iphone</div>
    <img src={"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_iPhone_13_Pro_color_lineup_2022.jpg"}/>
    </div>
  <div className={Stylestore.card} onClick={(idx)=>Ipaddata(idx)} >
    <div className={Stylestore.text}>ipad</div>
    <img src={"https://as-images.apple.com/is/refurb-ipad-air-wifi-green-2021_AV1?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1644268588850"}/>
    </div>
    <div className={Stylestore.card} onClick={(idx)=>Watchdata(idx)} >
    <div className={Stylestore.text}>Apple Watch</div>
    <img src={"https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020.jpg.landing-big_2x.jpg"}/>
    </div>
    <div className={Stylestore.card} onClick={(idx)=>Podsdata(idx)} >
    <div className={Stylestore.text}>Air Pods</div>
    <img src={"https://www.macworld.com/wp-content/uploads/2023/01/Which-AirPods-are-best-1.jpg?quality=50&strip=all&w=1024"}/>
    </div>
    <div className={Stylestore.card}onClick={(idx)=>Accessoriesdata(idx)} >
    <div className={Stylestore.text}>Accessories</div>
    <img src={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0Q2?wid=266&hei=291&fmt=png-alpha&.v=1649352718774"}/>
    </div>
    <div className={Stylestore.card} onClick={(idx)=>Tvdata(idx)} >
    <div className={Stylestore.text}>Tv</div>
    <img src={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0Q2?wid=266&hei=291&fmt=png-alpha&.v=1649352718774"}/>
    </div>
 </div>
  )
}

export default Storenav