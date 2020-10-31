import React, { memo } from 'react'

import {CommunityWrapper} from './style'

import OneHeader from '@/components/one-header'
import MySearch from '@/components/search'
import CommunityBanner from './c-cpns/community-bannner'
import HotTopic from './c-cpns/hot-topic'
import ChangeTitle from './c-cpns/change-title'
import RecommendTopic from './c-cpns/recommend-topic'


export default memo(function Community() {
  return (
    <CommunityWrapper>
      <OneHeader title="话题" />
      <MySearch />
      <CommunityBanner />
      <HotTopic />
      <ChangeTitle />
      <RecommendTopic />
    </CommunityWrapper>
  )
})
