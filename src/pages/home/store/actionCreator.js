import * as actionTypes from './constants'

import {
  getBanner,
  getNine,
  getHomeInfo
} from '@/servics/home'

import {getArticleInfo} from '@/servics/article'

export const changeBannersAction = (res) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners: res.data
})

export const changeNineDataAction = (res) => ({
  type: actionTypes.CHANGE_NINEDATA,
  nineData: res.data
})

export const changeHomeDataAction = (res) => ({
  type:actionTypes.CHANGE_HOME_INFO,
  homeInfo:res.data
})

export const changeArticleInfoAction = (res)=>({
  type:actionTypes.CHANGE_ARTICLE_INFO,
  articleInfo:res.data
})


//------------------------------------------------------------

export const getHomeBanner = () => {
  return dispatch => {
    getBanner().then(res => {
      // console.log(res)
      dispatch(changeBannersAction(res))
    })
  }
}


export const getNineData = () => {
  return dispatch => {
    getNine().then(res => {
      dispatch(changeNineDataAction(res))
    })
  }
}

export const getHome = () => {
  return dispatch => {
    getHomeInfo().then(res=>{
      dispatch(changeHomeDataAction(res))
    })
  }
}


export const getArticle = () => {
  return dispatch =>{
    getArticleInfo().then(res=>{
      dispatch(changeArticleInfoAction(res))
      // console.log(res)
    })
  }
}










