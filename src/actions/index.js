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

export const deleteProject = (id) => {
	return {
		type: 'DELETE_PROJECT',
		id
	}
}