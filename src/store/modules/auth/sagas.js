import { takeLatest,call,put, all }  from 'redux-saga/effects';
import {signInSuccess } from './actions';
import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({payload}){
    
    try {
        const { email,password } = payload;
        const response = yield call(api.post, '/sessions',{
            email,
            password
        });    
        const { token,user } = response.data;
        yield put(signInSuccess(token,user));
        history.push('/dashboard');            
        
    } catch (error) {
        
    }
}

export function signOut(){
    history.push('/');
}
export default all([
    takeLatest('@auth/SIGN_IN_REQUEST' ,signIn),
    takeLatest('@auth/SIGN_OUT'        ,signOut),
]);