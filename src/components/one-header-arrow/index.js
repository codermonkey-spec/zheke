import React, { memo } from 'react'

import {LeftOutlined} from '@ant-design/icons'
import { HeaderArrowWrapper } from './style'

export default memo(function HeaderArrow(props) {

  const { title } = props

  return (
    <HeaderArrowWrapper>
      <LeftOutlined style={{fontSize:16,marginLeft:5}} />
      <p>{title}</p>
    </HeaderArrowWrapper>
  )
})
