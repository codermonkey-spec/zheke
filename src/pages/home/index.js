import React, { memo, useEffect } from 'react'

import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import {
  getHomeBanner,
  getHome
} from './store/actionCreator'
import {HomeWrapper} from './style'

import OneHeader from '@/components/one-header'
import MySearch from '@/components/search'
import MyBanner from '@/components/banner'
import Nine from './c-cpns/nine'
import HomeTitle from '@/components/home-title-wrapper'
import HomeInfo from '@/components/home-info'

export default memo(function Home() {

  const {homeInfo} = useSelector(state => ({
    homeInfo:state.getIn(['home','homeInfo'])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getHomeBanner())
    dispatch(getHome())
  },[dispatch])


  return (
    <HomeWrapper>
      <OneHeader title="首页" />
      <MySearch />
      <MyBanner />
      <Nine />
      <HomeTitle title="在线监护" />
      <HomeInfo info={homeInfo.slice(0,3)}/>

      <HomeTitle title="植物图鉴" />
      <HomeInfo info={homeInfo.slice(3,6)}/>
    </HomeWrapper>
  )
})
