import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { IPagination, IPayload } from 'interfaces/interfaces/IPayload'
import { IUser } from 'interfaces/interfaces/IUser'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { EUserActions } from 'redux/actions/users/EUserAction'
import {
  UpdateUserDetailAction,
  updateUsersListAction
} from 'redux/actions/users/usersAction'
import {
  IGetUserByIdAction,
  IGetUsersAction,
  IUpdateUserByIdAction
} from 'redux/actions/users/usersTypes'
import { UsersApi } from 'services/api/users/usersApi'
import { checkStatus, errorNoti, successNoti } from 'utils/services'

function* getUsersListSaga(action: IGetUsersAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IPagination<IUser[]>>> = yield call(
      UsersApi.getUsersList,
      action.request
    )
    const data = checkStatus(response)
    if (data) {
      yield put(updateUsersListAction(data))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* getUserByIdSaga(action: IGetUserByIdAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IUser>> = yield call(
      UsersApi.getUserById,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      yield put(UpdateUserDetailAction(data))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* updateUserByIdSaga(action: IUpdateUserByIdAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IUser>> = yield call(
      UsersApi.updateUserById,
      action.user
    )
    const data = checkStatus(response)
    if (data) {
      yield put(UpdateUserDetailAction(data))
      const message = i18n.t('modal.message.updateUserSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(EUserActions.USERS_LIST, getUsersListSaga),
    takeLatest(EUserActions.GET_USER_BY_ID, getUserByIdSaga),
    takeLatest(EUserActions.UPDATE_USER_BY_ID, updateUserByIdSaga)
  ])
}
