import React from 'react'
import Style from './Supportimg.module.css'

const Supportimg = () => {
  return (
    <div className={Style.main}>
      <div className={Style.section1}>
        <div className={Style.top1}>
          <img src={'https://miro.medium.com/max/1024/1*bBZ__PgEvSohoMhQtbNC8A.jpeg'} />
        </div>
        <div className={Style.bottom1}>
          <img src={'https://9to5mac.com/wp-content/uploads/sites/6/2015/08/apple-college-kids.jpg'} />
        </div>
      </div>
      <div className={Style.section2}>
        <div className={Style.top2}>
          <div className={Style.left}>
          <img src={"https://rtlimages.apple.com/cmc/dieter/store/16_9/R006.png?resize=750:422&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"}/>
          </div>
          <div className={Style.right}>
          <img src={"https://cdn.webnews.it/KTH0E1fMjfiZ4niKG_bvlLlIhpY=/2119x1080/https://www.webnews.it/app/uploads/sites/2/2022/03/come-contattare-apple-via-chat.jpeg"}/>
          </div>
        </div>
        <div className={Style.bottom2}>
        <img src={"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_Global-Repair-Update_082919_big.jpg.large.jpg"}/>
        </div>
      </div>
      <div className={Style.section3}>
        <div className={Style.top3}>
        <img src={"https://www.apple.com/newsroom/images/environments/stores/Apple-Myeongdong-opening-day-Apple-Pickup-area_big.jpg.small_2x.jpg"}/>
        </div>
        <div className={Style.bottom3}>
        <img src={"https://www.apple.com/careers/images/teams/customer/gallery-large/default.jpg"}/>
        </div>
      </div>
      <div className={Style.section4}>
        <div className={Style.top4}>
        <img src={"https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-lg-ac-accidents-promo-iphone_2x.png"}/>
        </div>
        <div className={Style.bottom4}>
        <img src={"https://stupidapplerumors.com/wp-content/uploads/2021/06/how-to-make-the-apple-logo-screenshot.png"}/>
        </div>
      </div>
    </div>
  )
}

export default Supportimg;