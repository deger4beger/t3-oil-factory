import React from "react";

const GroupControl = ({
	children,
	title,
}: {
	children?: React.ReactNode;
	title: string;
}) => {
	return (
		<div className="flex justify-end">
			<div className="inline-flex justify-end items-end border-b-4 border-zinc-700 pb-2">
				<h1 className="border-zinc-600 mr-6 font-semibold pl-4">{title}</h1>
				{!!children && <div>{children}</div>}
			</div>
		</div>
	);
};

export default GroupControl;
