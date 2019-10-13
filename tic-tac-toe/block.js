class Block extends React.Component {
	render() {
		return this.props.sign === 'x' ? (
			<Cross></Cross>
		) : this.props.sign === 'o' ? (
			<Circle></Circle>
		) : (
			<div id={'block-' + this.props.id} onClick={this.props.select}></div>
		);
	}
}

function Cross(props) {
	return (
		<svg className="sign">
			<line className="sign" x1="5" y1="5" x2="90" y2="90"></line>
			<line className="sign" x1="90" y1="5" x2="5" y2="90"></line>
		</svg>
	);
}

function Circle(props) {
	return (
		<svg className="sign">
			<circle className="sign" cx="50" cy="50" r="45"></circle>
		</svg>
	);
}
