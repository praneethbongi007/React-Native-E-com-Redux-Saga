import React from 'react';
import {View, Text} from 'react-native';
import {takeEvery} from 'redux-saga/effects';
import {USER_LIST} from './Constants';

function* userList() {
    const url= "https://dummyjson.com/users"
    let data = yield fetch(url)
    data = yield data.json()
    console.warn("data in saga",data)
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
