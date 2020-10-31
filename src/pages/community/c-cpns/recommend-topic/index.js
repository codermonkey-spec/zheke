import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getRecommendData } from '../../store/actionCreators'
import { HeartOutlined } from '@ant-design/icons'
import { RecommendTopicWrapper } from './style'


export default memo(function RecommendTopic() {
  const { recommendTopic } = useSelector(state => ({
    recommendTopic: state.getIn(['community', 'recommendTopic'])
  }), shallowEqual)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getRecommendData())
  }, [dispatch])

  return (
    <RecommendTopicWrapper>
      {
        recommendTopic.map((item, index) => {
          return (
            <div key={item.id} className="recommend-item" >
              <div className="top">
                <img src={item.picUrl} alt="" />
              </div>
              <p className="description">{item.description}</p>
              <div className="bottom">
                <div>
                  <img src={item.authorPic} alt="" />
                  <span>{item.authorName}</span>
                </div>
                <div>
                  <HeartOutlined />
                  <span className="love">{item.love}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </RecommendTopicWrapper>
  )
})
