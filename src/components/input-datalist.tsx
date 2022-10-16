import React from "react"

const InputDatalist = ({
	title,
	type="text",
	value,
	onChange,
	datalist,
	style="light"
}: {
	title?: string
	type?: string
	value: string | number
	onChange: (value: string) => void
	datalist?: string[]
	style?: "dark" | "light"
}) => {
	return (
		<div className="flex flex-col">
			{title && <h1 className={"text-sm mb-1" + (style==="dark" ? " text-zinc-400" : " text-zinc-600")}>
				{ title }
			</h1> }
			<input
				type={ type }
				value={ value }
				onChange={ (e) => onChange(e.target.value) }
				name="name"
				list="purchase-name"
				placeholder="..."
				className={"border-b-2 border-zinc-600 text-zinc-900 px-2 text-base mb-4 w-11/12" + (style==="dark" ? " bg-zinc-900 text-zinc-50" : " bg-zinc-300")}
			/>
		    { datalist && (
		    	<datalist id="purchase-name">
			    	{ datalist.map(data => <option value={ data } key={ data } /> ) }
		    	</datalist>
		    ) }
		</div>
	)
}

export default InputDatalist