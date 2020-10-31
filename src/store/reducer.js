import {combineReducers} from 'redux-immutable'

import {reducer as homeReducer} from '../pages/home/store'
import {reducer as myReducer} from '../pages/my/store'
import {reducer as communityReducer} from '../pages/community/store'

const reducer = combineReducers({
  home:homeReducer,
  my:myReducer,
  community:communityReducer
})

export default reducer




