import React from "react"

const InputDatalist = () => {
	return (
		<>
			<h1 className="text-sm text-zinc-600">
				Название закупки
			</h1>
			<input
				type="text"
				name="name"
				list="purchase-name"
				placeholder="..."
				className="bg-zinc-300 border-b-2 border-zinc-600 text-zinc-900 px-2 text-base mb-4 w-full"
			/>
		    <datalist id="purchase-name">
		      <option value="Boston" />
		      <option value="Cambridge" />
		    </datalist>
		</>
	)
}

export default InputDatalist