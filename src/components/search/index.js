import React, { memo } from 'react'

import {SearchWrapper} from './style'

import { Input } from 'antd'
import {SearchOutlined} from '@ant-design/icons'

export default memo(function MySearch() {
  return (
    <SearchWrapper className="mySearch">
      <Input type="search" 
             placeholder="搜索"
             bordered={false}
             prefix={<SearchOutlined />} />
    </SearchWrapper>
  )
})
