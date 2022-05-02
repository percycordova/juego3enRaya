const Cell = ({value, onClick, turn, winner}) => {
	const handleClick = () => {
		turn !== null && value === null && onClick()
	}

	return (
		<div
			onClick={() => handleClick()}
			className={`square ${
				value !== null && `square--${value} ${winner && 'winner'}`
			}`}
		></div>
	)
}

export default Cell
