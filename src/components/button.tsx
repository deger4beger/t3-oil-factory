import React from "react";

const Button = ({
	onClick = () => void 0,
	text,
	style = "standard",
	isLoading = false,
}: {
	onClick?: () => void;
	text: string;
	style?: "light" | "standard" | "dark";
	isLoading?: boolean;
}) => {
	const styles =
		style === "light"
			? "bg-zinc-300 text-zinc-900"
			: style === "dark"
			? "bg-zinc-800 border-zinc-700"
			: "bg-zinc-700 border-zinc-600";

	return (
		<button
			className={"p-1 px-4 rounded font-semibold border-[1px] " + styles}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading ? "Загрузка..." : text}
		</button>
	);
};

export default Button;
