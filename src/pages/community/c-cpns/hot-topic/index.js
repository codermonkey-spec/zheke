import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getCommunityHotTopic } from '../../store/actionCreators'

import { HotTopicWrapper } from './style'

export default memo(function HotTopic() {
  const { hotTopics } = useSelector(state => ({
    hotTopics: state.getIn(['community', 'hotTopics'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommunityHotTopic())
  }, [dispatch])

  return (
    <HotTopicWrapper>
      {
        hotTopics.map((item, index) => {
          return (
            <div key={item.id} className="hot-topic-item">
              <img src={item.picUrl} alt="" />
              <div className="description">
                <span>#{item.description}</span>
                <p className="time">{item.time}</p>
              </div>
            </div>
          )
        })
      }
    </HotTopicWrapper>
  )
})
