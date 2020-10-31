import React, { memo } from 'react'

import {HotLeafTitleWrapper} from './style'

export default memo(function HotLeafTitle(props) {

  const {title} = props

  return (
    <HotLeafTitleWrapper>
      <h3>{title}</h3>
    </HotLeafTitleWrapper>
  )
})
