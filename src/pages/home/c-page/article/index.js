import React, { memo } from 'react'

import {HomeArticleWrapper} from './style'
import HeaderArrow from '@/components/one-header-arrow'
import MySearch from '@/components/search'
import ArticleHeader from '../../c-cpns/article-header'
import ArticleInfoList from '../../c-cpns/article-info-list'

export default memo(function HomeArticle() {
  return (
    <HomeArticleWrapper>
      <HeaderArrow title="文章" />
      <MySearch />
      <ArticleHeader />
      <ArticleInfoList />
    </HomeArticleWrapper>
  )
})
