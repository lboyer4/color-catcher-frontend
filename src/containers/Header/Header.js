import React, { Component } from 'react';
import './_Header.scss';
import { makePalette } from '../../actions';
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
		for(let i = 0; i < 5; i++) {
			if (oldColors && oldColors[i].locked) {
				newColors.push(oldColors[i])
			} else {
				newColors.push({locked: false, color: this.generateHex()});	
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
	makePalette: (palette) => dispatch(makePalette(palette))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);