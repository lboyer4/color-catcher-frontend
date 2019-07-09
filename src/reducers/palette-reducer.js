const initialState = [];
const palette = (state=initialState, action) => {
	switch (action.type) {
		case 'MAKE_PALETTE':
			return [...action.palette]
		default: 
			return state
	}
}

export default palette;