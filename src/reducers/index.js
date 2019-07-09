import { combineReducers } from 'redux';
import palette from './palette-reducer';
import projects from './projects-reducer';
import project from './project-reducer';

export const rootReducer = combineReducers({
	palette,
	projects,
	project
});

