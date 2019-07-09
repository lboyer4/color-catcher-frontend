const initialState = {}

const project = (state=initialState, action) => {
	switch (action.type) {
		case 'PICK_PROJECT':
			return action.project
		default:
			return state
	}
}

export default project;