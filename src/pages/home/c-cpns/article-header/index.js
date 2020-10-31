import React, { memo } from 'react'

import {ArticleHeaderWrapper} from './style'

export default memo(function ArticleHeader() {
  return (
    <ArticleHeaderWrapper>
      <img src={require("../../../../assets/img/article-header.png")} alt="" />
      <h3>咏梨花古诗词集萃</h3>
      <p>梨花是素颜之花,离愁之花,更是寂寞之花.</p>
    </ArticleHeaderWrapper>
  )
})
