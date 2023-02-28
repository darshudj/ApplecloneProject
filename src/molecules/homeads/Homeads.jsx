import React from 'react'
import Style from './Homead.module.css'
import AppleIcon from '@mui/icons-material/Apple';
import MemoryIcon from '@mui/icons-material/Memory';
const Homeads = () => {
  return (
    <>
    <div className={Style.main}>
      <div className={Style.macbook}>
        <h1>MacBook Pro </h1>
        <h2>Supercharged by M2 Pro and M2 Max</h2>
        <h4>Learn more &gt;   Buy &gt;  </h4>
        <img src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-macbook-pro-202301?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1670261864358'} />
      </div>
      <div className={Style.homepod}>
        <h1>HomePod </h1>
        <h2>Profound sound</h2>
        <h4>Learn more &gt;   Buy &gt;  </h4>
        <img className={Style.podimg}src={'https://www.apple.com/v/homepod-2nd-generation/a/images/meta/homepod__dlwt789yhxme_og.png?202302030001'} />
      </div>
    </div>
 <div className={Style.main2}>
      <div className={Style.macbook2}>
        <h1> <AppleIcon sx={{fontSize:45}}/>Watch</h1>
        <h2>Adventure awaits</h2>
        <h4>Learn more &gt;   Buy &gt;  </h4>
        <img src={'https://www.apple.com/in/apple-watch-ultra/images/overview/hero/hero_watch_ultra__cbu8ymf4a8xe_large.jpg'} />
      </div>
      <div className={Style.homepod2}>
        <h1>ipad </h1>
        <h2>Big and bigger</h2>
        <h4>Learn more &gt;   Buy &gt;  </h4>
        <img  src={'https://www.apple.com/newsroom/images/product/ipad/standard/Apple-iPad-10th-gen-hero-221018_Full-Bleed-Image.jpg.large.jpg'} />
      </div>
    </div>
    <div className={Style.main3}>
      <div className={Style.macbook}>
        <h1> <AppleIcon sx={{fontSize:45}}/>Watch</h1>
        <h2>A healthy leap ahed</h2>
        <h4>Learn more &gt;   Buy &gt;  </h4>
        <img src={'https://www.apple.com/v/apple-watch-series-8/b/images/meta/gps-lte__de35dernyje6_og.png'} />
      </div>
      <div className={Style.homepod}>
        <h1>iPad </h1>
        <h2>Supercharged by <MemoryIcon sx={{fontSize:30}}/>  </h2>
        <h4>Learn more &gt;   Buy &gt;  </h4>
        <img src={'https://www.apple.com/v/ipad-pro/al/images/meta/ipad-pro_overview__glcw458o4byq_og.png'} />
  </div>
    </div>
    </>
  )
}

export default Homeads;