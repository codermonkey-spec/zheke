import React, { memo } from 'react'

import {OneHeaderWrapper} from './style'

export default memo(function OneHeader(props) {
  const {title} = props


  return (
    <OneHeaderWrapper>
      <h3>{title}</h3>
    </OneHeaderWrapper>
  )
})
