import React, { memo } from 'react'

import { ChangeTitleWrapper } from './style'
import { ReloadOutlined } from '@ant-design/icons'
export default memo(function ChangeTitle() {
  return (
    <ChangeTitleWrapper>
      <p>推荐话题</p>
      <div className="right">
        <ReloadOutlined />
        <p className="change">换一批</p>
      </div>
    </ChangeTitleWrapper>
  )
})
