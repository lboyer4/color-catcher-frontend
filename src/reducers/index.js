import { combineReducers } from 'redux';
import palette from './palette-reducer';
import palettes from './palettes-reducer';
import projects from './projects-reducer';
import project from './project-reducer';

export const rootReducer = combineReducers({
	palettes,
	palette,
	projects,
	project
});

