import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getArticle } from '../../store/actionCreator'
import { ArticleInfoListWrapper } from './style'


export default memo(function ArticleInfoList() {
  const { articleInfo } = useSelector(state => ({
    articleInfo: state.getIn(['home', 'articleInfo'])
  }),shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticle())
  }, [dispatch])
  return (
    <ArticleInfoListWrapper>
      {
        articleInfo.map((item, index) => {
          return (
            <div key={item.id} className="article-item">
              <div className="left">
                <img src={item.picUrl} alt="" />
              </div>
              <div className="right">
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <div className="bottom">
                  <p>来源:&nbsp;&nbsp;{item.source}</p>
                  <p className="time">{item.time}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </ArticleInfoListWrapper>
  )
})
