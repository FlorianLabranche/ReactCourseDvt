import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {NewsApi} from 'api/NewsApi'
import {newsApiResponse} from './actions'
import {NEWS_API_REQUEST} from './constants'

export default function* defaultSaga() {
  yield takeLatest(NEWS_API_REQUEST, getNews);
}

export function* getNews(){
  try {
    const response = yield call(NewsApi);
    const articles = [...response.articles]
    yield put(newsApiResponse(articles));;
  }
  catch(err){
    yield put(newsApiResponse(err));
  }
}

