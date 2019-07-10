export const makePalette = (palette) => {
	return {
		type: 'MAKE_PALETTE',
		palette
	}
}

export const setProjects = (projects) => {
	return {
		type: 'SET_PROJECTS',
		projects
	}
}

export const addProject = (project) => {
	return {
		type: 'ADD_PROJECT',
		project
	}
}

export const pickProject = (project) => {
	return {
		type: 'PICK_PROJECT',
		project
	}
}

export const deleteProject = (id) => {
	return {
		type: 'DELETE_PROJECT',
		id
	}
}

export const deletePalette = (id) => {
	return {
		type: 'DELETE_PALETTE',
		id
	}
}

export const addPalette = (palette) => { 
	return {
		type: 'ADD_PALETTE',
		palette
	}
}

export const setPalettes = (palettes) => {
	return {
		type: 'SET_PALETTES',
		palettes 
	}
}