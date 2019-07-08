const initialState = [];

const project = (state=initialState, action) => {
	switch (action.type) {
		case 'ADD_PROJECTS':
			return action.projects
		case 'DELETE_PROJECT':
			return state.filter(project => {
				return project.id != action.id
			})
		default: 
			return state
	}
}

export default project; 