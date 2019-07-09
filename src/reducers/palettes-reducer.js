const initialState = [];
const palettes = (state=initialState, action) => {
	switch (action.type) {
		case 'SET_PALETTES':
			return action.palettes
		case 'ADD_PALETTE':
			return [...state, action.palette]
		default: 
			return state
	}
}

export default palettes;