import React, { memo } from 'react'

import {RightOutlined} from '@ant-design/icons'

import {
  MyHeaderWrapper,
  MyHeaderWrapperLeft,
  MyHeaderWrapperRight
} from './style'



export default memo(function MyHeader() {
  return (
    <MyHeaderWrapper>
      <MyHeaderWrapperLeft>
        <h3>观夏</h3>
        <p>向往生活,热爱植物</p>
      </MyHeaderWrapperLeft>
      <MyHeaderWrapperRight>
        <img src={require('../../../../assets/img/banner1.png')} alt="" />
        <RightOutlined style={{fontSize:16,opacity:0.5}} />
      </MyHeaderWrapperRight>
    </MyHeaderWrapper>
  )
})
