import React from 'react'
import Style from './Footer.module.css'

const Footer = () => {
    const lists = ["Shop and Learn", "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TVHome", "AirTag", "Accessories", "Gift Cards", "Apple Wallet", "Wallet", "Account",]
    
    // const list2 =[ "Entertainment", "Apple One",
    // "Apple TV+","Apple Music","Apple Arcade","Apple Podcasts", "Apple Books", "App Store", "Apple Store", "Ways to Buy",]
    
    // const list3 =[ "Apple Trade In", "Recycling Programme","Order Status","Shopping Help","For Business","Apple and Business","For Education", "Apple and Education", "Shop for Education",]
    // const list4 =["Shop for University", "For Healthcare", "Apple in Healthcare","Health on Apple Watch","Apple Values", "Accessibility", "Education", "Environment", "Privacy",]
    // const list5 =[ "Supplier Responsibility","About Apple","Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance","Events",]

    return (
        <div className={Style.main}>

            <p className={Style.para}>
                *Data plan is required. 5G is available in selected markets and through selected carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/in/iphone/cellular.
                ‡Instant savings, otherwise referred to as Instant Cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards & HDFC Bank Credit Card EMI only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustments or cancellations may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
                Get extra trade-in credit, otherwise referred to as additional exchange savings or exchange bonus, when you trade in an eligible iPhone and purchase a new Apple device until 5 March 2023. Extra trade-in credit of ₹5000 is available while trading in iPhone 12, iPhone 11, iPhone XR or iPhone X and ₹4500 on iPhone 7.
                ‡‡No Cost EMI is available with the purchase of an eligible product made using qualifying credit or debit cards on 3- or 6-month tenures from most leading banks. Minimum order spend applies as per your credit or debit cards issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Credit or debit card eligibility is subject to terms and conditions between you and your credit or debit cardissuing bank. Offer may be revised or withdrawn at any time without any prior notice. Terms & conditions apply.
                Representative example: Based off a 6-month tenure. iPhone 14 at ₹79900 total cost includes 14% p.a. and No Cost EMI savings of ₹3164, paid over 6 months as six monthly payments of ₹13317.
            </p>
            <div className={Style.lists}>
            {lists.map((el,i) => (
                <div className={Style.list} key={i}>
                    <ul ><li>{el}</li></ul>
                </div>
            ))}
            
            </div>
            <p className={Style.para}>
                Contact Apple
                More ways to shop: Find a retailer near you. Or call 000800 040 1966.
                India
                Copyright © 2023 Apple Inc. All rights reserved.Privacy Policy Terms of Use Sales Policy Legal Site Map
            </p>
        </div>
    )
}

export default Footer;