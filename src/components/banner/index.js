import React, { memo } from 'react'

import {useSelector,shallowEqual} from 'react-redux'

import {Carousel} from 'antd'

import {MyBannerWrapper} from './style'

export default memo(function MyBanner() {

  const {banners} = useSelector(state=>({
    banners:state.getIn(['home','banners'])
  }),shallowEqual)

  // console.log(banners)


  return (
    <MyBannerWrapper>
      <Carousel  dots={{className: "dots"}}>
        {
          banners.map((item,index)=>{
            return (
              <div className="banner" key={item.title}>
                <img src={item.picUrl} alt={item.title} />
              </div>
            )
          })
        }

      </Carousel>
    </MyBannerWrapper>
  )
})
