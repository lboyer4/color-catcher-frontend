import React, { Component } from 'react';
import './_Header.scss';
import { makePalette, clearPalette } from '../../actions';
import { connect } from 'react-redux';

class Header extends Component {

	componentDidMount = () => {
		this.generateColors()
	}

	handleClick = () => {
		const oldColors = this.props.palette;
		this.generateColors(oldColors)
	}

	generateColors = (oldColors) => {
		let newColors = [];
		if (oldColors) {
			newColors = oldColors.map(color => {
				if(color.locked) return color;
				return {locked: false, color: this.generateHex()}
			})	
		} else {
			for(let i = 0; i < 5; i++) {
				newColors.push({locked: false, color: this.generateHex()})
			}
		}
		this.props.makePalette(newColors);
	}

	generateHex = () => {
		const characters = "0123456789ABCDEF";
		let color = '#'
		for (let i = 0; i< 6; i++) {
			color += characters[(Math.floor(Math.random() * 16))]
		}
		return color;
	}

	render() {
		return(
			<main>
				<header>
					<h1>Color Catcher</h1>
					<button className='generate' onClick={this.handleClick} >Generate Colors</button>
				</header>
			</main>
		)
	}
}

const mapStateToProps = (state) => ({
	palette: state.palette
});

const mapDispatchToProps = (dispatch) => ({
	makePalette: (palette) => dispatch(makePalette(palette)),
 	clearPalette: (palette) => dispatch(clearPalette(palette))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);