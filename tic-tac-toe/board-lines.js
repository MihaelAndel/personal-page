function BoardLines(props) {
	return (
		<svg className="board-lines" height="300px" width="300px">
			<line className="board-line" x1="100" y1="0" x2="100" y2="300" />
			<line className="board-line" x1="200" y1="0" x2="200" y2="300" />
			<line className="board-line" x1="0" y1="100" x2="300" y2="100" />
			<line className="board-line" x1="0" y1="200" x2="300" y2="200" />
		</svg>
	);
}
