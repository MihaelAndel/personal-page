class Board extends React.Component {
	render() {
		return (
			<div className="board">
				{this.props.board.map((element, index) => (
					<Block key={index} id={index} select={this.props.select} className="block" sign={element}></Block>
				))}
			</div>
		);
	}
}
