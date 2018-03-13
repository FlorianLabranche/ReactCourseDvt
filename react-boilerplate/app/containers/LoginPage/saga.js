import { take, takeLatest, call, put, select } from 'redux-saga/effects';
import {generatorUsersApi} from 'api/GeneratorUsers'
import {generateUserResponse} from './actions'
import {GENERATE_USER_REQUEST} from './constants'
// Individual exports for testing

export function* getGenerateUser() {
  try {
    const response = yield call(generatorUsersApi);
    yield put(generateUserResponse(response));
  } catch (err) {
    yield put(generateUserResponse(err));
  }
}

export default function* defaultSaga()
{
  yield takeLatest(GENERATE_USER_REQUEST,getGenerateUser)
}