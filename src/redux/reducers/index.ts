import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import commonReducer from './common/commonReducer'
import usersReducer from './users/usersReducer'
import { EAuthTypes } from 'redux/actions/auth/authTypes'
import { PERSIST_ROOT } from 'redux/store'
import classesReducer from './classes/classesReducer'
import subjectReducer from './subjects/subjectReducer'
import chapterReducer from './chapters/chapterReducer'
const allReducers = combineReducers({
  common: commonReducer,
  auth: authReducer,
  users: usersReducer,
  classes: classesReducer,
  subjects: subjectReducer,
  chapterReducer: chapterReducer
})

const rootReducer = (state: any, action: any) => {
  if (action.type === EAuthTypes.LOGOUT) {
    localStorage.removeItem(PERSIST_ROOT)
    return allReducers(undefined, action)
  }
  return allReducers(state, action)
}

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
