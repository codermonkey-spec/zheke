import React, { memo } from 'react'

import {MyWrapper} from './style'

import OneHeader from '@/components/one-header'
import MyHeader from './c-cpns/my-header'
import MyInfo from './c-cpns/my-info'
import MyIcons from './c-cpns/my-icons'
export default memo(function My() {
  return (
    <MyWrapper>
      <OneHeader title="我的" />
      <MyHeader />
      <MyInfo />
      <MyIcons />
    </MyWrapper>
  )
})
