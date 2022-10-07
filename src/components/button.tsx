import React from "react"

const Button = ({
	onClick,
	text
}: {
	onClick: () => void;
	text: string;
}) => {
	return (
		<button className="bg-emerald-600 p-2 px-4 rounded hover:bg-emerald-700" onClick={onClick}>
			{ text }
		</button>
	)
}

export default Button