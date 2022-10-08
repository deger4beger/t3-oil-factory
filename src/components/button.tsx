import React from "react"

const Button = ({
	onClick,
	text,
	style="standard"
}: {
	onClick: () => void;
	text: string;
	style?: "coloured" | "standard"
}) => {

	const styles = style === "coloured" ? "bg-emerald-700 hover:bg-emerald-800 border-emerald-800" :
		"bg-zinc-700 border-zinc-600"

	return (
		<button className={ "p-2 px-4 rounded border-[1px] " + styles } onClick={onClick}>
			{ text }
		</button>
	)
}

export default Button