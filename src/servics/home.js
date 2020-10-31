import request from './request'

export function getBanner(){
  return request({
    url:"/getBanners"
  })
}


export function getNine(){
  return request({
    url:'/getNineData'
  })
}

export function getHomeInfo(){
  return request({
    url:'/getHomeInfo'
  })
}




