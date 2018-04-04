import { combineReducers } from 'redux';
import { testReducer } from './test.reducer';
import { authenticationReducer } from './authentication.reducer';
import { racketlistReducer } from './racketlist.reducer';


const rootReducer = combineReducers({
  testReducer,
  authenticationReducer,
  racketlistReducer
});

export default rootReducer;
