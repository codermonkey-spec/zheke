import request from './request'

export function getHotTopic(){
  return request({
    url:'/getHotTopic'
  })
}

export function getRecommendTopic(){
  return request({
    url:'/getRecommendTopic'
  })
}



