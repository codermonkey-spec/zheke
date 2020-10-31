import React, { memo,useState,useCallback } from 'react'
import {Link} from 'react-router-dom'

import { OneFooterInfo } from '../../pages/common/local-data'

import { OneFooterWrapper } from './style'



export default memo(function OneFooter() {

  const [currentIndex,setCurrentIndex] = useState(0)

  // 图片后缀名处理
  const footerImg = ['home', 'leaf','add', 'community', 'my']

 const imgIcon = useCallback((item,index) => {
    if(index === currentIndex){
      return (
        <Link to={`${footerImg[index]}`}>
          <img src={require(`../../assets/img/active-${footerImg[index]}.png`)} alt={item.title} />
      </Link> 
      )
    }else{
      return (
        <Link to={`${footerImg[index]}`}>
          <img src={require(`../../assets/img/${footerImg[index]}.png`)} alt={item.title} />
        </Link>
      )
    }
  },[currentIndex,footerImg])
 
  return (
    <OneFooterWrapper>
      {
        OneFooterInfo.map((item, index) => {
          return (
            <div className="icon-info" key={item.picUrl} onClick={e => setCurrentIndex(index) }>
              {imgIcon(item,index)}
              {item.title && <h6 className="title">{item.title}</h6>}
            </div>
          )
        })
      }
    </OneFooterWrapper>
  )
})
