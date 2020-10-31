import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getMyIconsInfo } from '../../store/actionCreators'
import { MyIconsWrapper } from './style'
import { RightOutlined } from '@ant-design/icons'

export default memo(function MyIcons() {
  const { myIcons } = useSelector(state => ({
    myIcons: state.getIn(['my', 'myIcons'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyIconsInfo())
  }, [dispatch])

  return (
    <MyIconsWrapper>
      {
        myIcons.map((item, index) => {
          return (
            <div key={item.title} className="my-icon-item">
              <div className="item-left">
                <img src={item.picUrl} alt="" />
                <p>{item.title}</p>
              </div>
              <div className="item-right">
                <RightOutlined style={{fontSize:16,opacity:0.5}} />
              </div>
            </div>
          )
        })
      }
    </MyIconsWrapper>
  )
})
