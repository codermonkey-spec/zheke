import React, { memo } from 'react'

import {MyInfoWrapper} from './style'

export default memo(function MyInfo() {
  return (
    <MyInfoWrapper>
      <div className="concern">
        <h3>23</h3>
        <p>关注</p>
      </div>
      <div className="fans">
        <h3>34</h3>
        <p>粉丝</p>
      </div>
      <div className="collect">
        <h3>66</h3>
        <p>收藏</p>
      </div>
    </MyInfoWrapper>
  )
})
