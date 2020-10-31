import * as actionTypes from './constants'
import {
  getHotTopic,
  getRecommendTopic
} from '@/servics/community'

export const changeHotTopicAction = (res)=>({
  type:actionTypes.CHANGE_HOT_TOPIC,
  hotTopics:res.data
})

export const changeRecommendAction = (res)=>({
  type:actionTypes.CHANGE_RECOMMEND_TOPIC,
  recommendTopic:res.data
})

//------------------------------------------------
export const getCommunityHotTopic = ()=>{
  return dispatch =>{
    getHotTopic().then(res=>{
      dispatch(changeHotTopicAction(res))
    })
  }
}

export const getRecommendData = ()=> {
  return dispatch=>{
    getRecommendTopic().then(res=>{
      dispatch(changeRecommendAction(res))
    })
  }
}

