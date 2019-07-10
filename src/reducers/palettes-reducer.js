const initialState = [];
const palettes = (state=initialState, action) => {
	switch (action.type) {
		case 'SET_PALETTES':
			return action.palettes
		case 'ADD_PALETTE':
			return [...state, action.palette]
		case 'DELETE_PALETTE':
			const results = state.filter(palette => {
				return palette.id !== Number(action.id)
			})
			return [...results]
		default: 
			return state
	}
}

export default palettes;