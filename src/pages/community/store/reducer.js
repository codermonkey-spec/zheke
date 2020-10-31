import {Map} from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  hotTopics:[],
  recommendTopic:[]
})

function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_HOT_TOPIC:
      return state.set('hotTopics',action.hotTopics)
    case actionTypes.CHANGE_RECOMMEND_TOPIC:
      return state.set('recommendTopic',action.recommendTopic)
    default:
      return state
  }
}


export default reducer





