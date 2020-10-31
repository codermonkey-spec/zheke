import {Map} from 'immutable'
import * as actionTypes from './constants'


const defaultState = Map({
  myIcons:[]
})


function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_MY_ICONS:
      return state.set('myIcons',action.myIcons)
    default:
      return state
  }
}

export default reducer














