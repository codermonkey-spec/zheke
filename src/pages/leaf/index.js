import React, { memo } from 'react'

import {useSelector,shallowEqual} from 'react-redux'

import OneHeader from '@/components/one-header'
import MySearch from '@/components/search'
import MyBanner from '@/components/banner'
import HotLeafTitle from '@/components/hot-leaf-title'
import LeafHotInfo from '@/components/leaf-hot-info'


export default memo(function Leaf() {

  const {homeInfo} = useSelector(state => ({
    homeInfo:state.getIn(['home','homeInfo'])
  }),shallowEqual)

  return (
    <div>
      <OneHeader title="图鉴" />
      <MySearch />
      <MyBanner />
      <HotLeafTitle title="热门图鉴" />
      <LeafHotInfo info={homeInfo.slice(3,12)}/>
    </div>
  )
})
