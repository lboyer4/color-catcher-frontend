import { combineReducers } from 'redux';
import palette from './palette-reducer';
import project from './project-reducer';

export const rootReducer = combineReducers({
	palette,
	project
});

