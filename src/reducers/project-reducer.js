const initialState = [];

const project = (state=initialState, action) => {
	switch (action.type) {
		case 'ADD_PROJECTS':
			return action.projects
		default: 
			return state
	}
}

export default project; 