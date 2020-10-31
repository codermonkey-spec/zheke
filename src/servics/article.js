import request from './request'

export function getArticleInfo(){
  return request({
    url:"/getArticleInfo"
  })
}