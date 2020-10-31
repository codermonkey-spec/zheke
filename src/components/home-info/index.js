import React, { memo } from 'react'


import { HomeInfoWrapper } from './style'

export default memo(function HomeInfo(props) {
  const { info,flag } = props

  return (
    <HomeInfoWrapper isHome={flag}>
      {
        info.map((item, index) => {
          return (
            <div key={item.picUrl} className="home-info-item">
              <img src={item.picUrl} alt="" />
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          )
        })
      }
    </HomeInfoWrapper>
  )
})
