import * as actionTypes from './constants'

import {getMyIcons} from '@/servics/my'

export const getMyIconsAction = (res) => ({
  type:actionTypes.CHANGE_MY_ICONS,
  myIcons:res.data
})


export const getMyIconsInfo = () => {
  return dispatch => {
    getMyIcons().then(res=>{
      dispatch(getMyIconsAction(res))
    })
  }
}











