import {Map} from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  banners:[],
  nineData:[],
  homeInfo:[],
  articleInfo:[]
})

function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_BANNERS:
      return state.set('banners',action.banners)
    case actionTypes.CHANGE_NINEDATA:
      return state.set('nineData',action.nineData)
    case actionTypes.CHANGE_HOME_INFO:
      return state.set('homeInfo',action.homeInfo)
    case actionTypes.CHANGE_ARTICLE_INFO:
      return state.set('articleInfo',action.articleInfo)
    default:
      return state
  }
}


export default reducer









