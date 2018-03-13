import { take, call, put, select } from 'redux-saga/effects';
import {NewsApi} from 'api/NewsApi'
import {newsApiAction} from './actions'

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
