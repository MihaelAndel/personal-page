class App extends React.Component {
	constructor(props) {
		super(props);

		let emptyBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

		this.state = {
			board: emptyBoard,
			history: [],
			currPlayer: 'x',
			isOver: false,
			winner: 'tie',
			turn: 0
		};

		this.selectBlock = this.selectBlock.bind(this);
		this.reset = this.reset.bind(this);
	}

	render() {
		return (
			<div className="app">
				<div>
					<BoardLines></BoardLines>
					<Board select={this.selectBlock} board={this.state.board}></Board>
				</div>
				<div className="info">
					<div>Current player: {this.state.currPlayer.toUpperCase()}</div>
					{this.state.isOver || this.state.turn === 9 ? (
						<div>
							<div>Winner is {this.state.winner.toUpperCase()}</div>
							<button onClick={this.reset}>RESET</button>
						</div>
					) : null}
				</div>
			</div>
		);
	}

	selectBlock(e) {
		if (!this.state.isOver) {
			let id = e.target.id.split('-')[1];
			let currentSign = this.state.currPlayer;
			let nextSign = this.state.currPlayer === 'x' ? 'o' : 'x';
			let nextBoard = this.state.board;
			nextBoard[id] = currentSign;
			let his = this.state.history;
			his.push(nextBoard);
			let nextTurn = this.state.turn + 1;

			let over = this.checkIsOver(nextBoard);

			let win = over ? this.state.currPlayer : 'tie';

			this.setState({
				currPlayer: nextSign,
				board: nextBoard,
				history: his,
				isOver: over,
				winner: win,
				turn: nextTurn
			});
		}
	}

	checkIsOver(board) {
		if (
			(board[0] === board[1] && board[0] === board[2]) ||
			(board[3] === board[4] && board[3] === board[5]) ||
			(board[6] === board[7] && board[6] === board[8]) ||
			(board[0] === board[3] && board[0] === board[6]) ||
			(board[1] === board[4] && board[1] === board[7]) ||
			(board[2] === board[5] && board[2] === board[8]) ||
			(board[0] === board[4] && board[0] === board[8]) ||
			(board[2] === board[4] && board[2] === board[6])
		) {
			return true;
		} else {
			return false;
		}
	}

	reset() {
		let emptyBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
		this.setState({
			history: [],
			currPlayer: 'x',
			isOver: false,
			winner: 'tie',
			turn: 0,
			board: emptyBoard
		});
	}
}

ReactDOM.render(<App></App>, document.getElementById('root'));
