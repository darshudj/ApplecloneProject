import React from 'react'
import Style from './home.module.css'
import { Link } from 'react-router-dom'
import Advideo from '../../molecules/homevid/Advideo'
import Homeads from '../../molecules/homeads/Homeads'
import Footer from '../../molecules/Footer/Footer'
const Home = () => {
    return (
        <div className={Style.home}>
        <div className={Style.header}>
        Get up to ₹10000 instant savings on selected products with HDFC Bank credit cards. ‡ Plus No Cost EMI from most leading banks. ‡‡
        <Link to='/store'>
            Shop now  &gt;
        </Link>
    </div>
            <div className={Style.main}>
            <div className={Style.iphone14pro}>
                    <h1>iPhone 14 Pro </h1>
                    <h2>Pro.Beyond.</h2>
                    <p className={Style.para}>With superfast 5G*</p>
                    <Link to='/store'>
                    <h4>Learn more &gt;   Buy &gt;  </h4>
                </Link>
                <img className={Style.pro} src={'https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_iphone_14_pro__e0act2165xqq_large.jpg'} />
                </div>
                <div className={Style.iphone14}>
                <h1>iPhone 14 </h1>
                <h2>Big and bigger</h2>
                <p className={Style.para}>With superfast 5G*</p>
                <h4>Learn more &gt;   Buy &gt;  </h4>
                <img src={'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg'} />
            </div>
            <div className={Style.advideo}>
            <Advideo/>
            </div>
            
            <Homeads/>
            <div className={Style.footer}>

            <Footer/>
            </div>
            
            </div>
        </div>
    )
}

export default Home