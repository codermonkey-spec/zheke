import React, { memo } from 'react'

import {Link} from 'react-router-dom'
import {CommunityBannerWrapper} from './style'

export default memo(function CommunityBanner() {
  return (
    <CommunityBannerWrapper>
      <Link to="">
        <img src={require('../../../../assets/img/话题.png')} alt="" />
      </Link>
      <Link to="">
        <img src={require('../../../../assets/img/话题.png')} alt="" />
      </Link>
      <Link to="">
        <img src={require('../../../../assets/img/话题.png')} alt="" />
      </Link>
    </CommunityBannerWrapper>
  )
})
