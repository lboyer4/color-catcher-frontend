export const makePalette = (palette) => {
	return {
		type: 'MAKE_PALETTE',
		palette
	}
}


export const addProjects = (projects) => {
	return {
		type: 'ADD_PROJECTS',
		projects
	}
}

export const deleteProject = (id) => {
	return {
		type: 'DELETE_PROJECT',
		id
	}
}