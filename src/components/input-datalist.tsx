import React from "react"

const InputDatalist = ({
	title,
	type="text",
	value,
	onChange,
	datalist
}: {
	title: string
	type?: string
	value: string
	onChange: (value: string) => void
	datalist?: string[]
}) => {
	return (
		<>
			<h1 className="text-sm text-zinc-600">
				{ title }
			</h1>
			<input
				type={ type }
				value={ value }
				onChange={ (e) => onChange(e.target.value) }
				name="name"
				list="purchase-name"
				placeholder="..."
				className="bg-zinc-300 border-b-2 border-zinc-600 text-zinc-900 px-2 text-base mb-4 w-full"
			/>
		    { datalist && (
		    	<datalist id="purchase-name">
			    	{ datalist.map(data => <option value={ data } key={ data } /> ) }
		    	</datalist>
		    ) }
		</>
	)
}

export default InputDatalist