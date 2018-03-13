import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {NewsApi} from 'api/NewsApi'
import {newsApiAction} from './actions'
import {NEWS_API_REQUEST} from './constants' 

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/saga.js
}

export function* getNews(){
  try{
    const response = yield call(NewsApi);
    put(newsApiAction(response));
  }
  catch(err){
    console.log(err);
  }
}


export default function* homePageSagaNews(){
  yield takeLatest(NEWS_API_REQUEST, getNews)
}
