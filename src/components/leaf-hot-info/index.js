import React, { memo } from 'react'

import {LeafHotInfoWrapper} from './style'

export default memo(function LeafHotInfo(props) {
  const {info} = props


  return (
    <LeafHotInfoWrapper>
      {
        info.map((item,index)=>{
          return (
            <div key={item.title} className="leaf-hot-info">
              <img src={item.picUrl} alt="" />
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          )
        })
      }
    </LeafHotInfoWrapper>
  )
})
