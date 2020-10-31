import React, { memo } from 'react'

import {Link} from 'react-router-dom'

import {HomeTitleWrapper} from './style'

export default memo(function HomeTitle(props) {

  const {title} = props


  return (
    <HomeTitleWrapper>
      <p>{title}</p>
      <Link to="">查看更多</Link>
    </HomeTitleWrapper>
  )
})
