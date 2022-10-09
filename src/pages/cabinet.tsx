import { NextPage } from "next"
import { useSession } from "next-auth/react"
import React from "react"
import PageShell from "../components/page-shell"


const Cabinet: NextPage = () => {

	const { data } = useSession()

	return (
		<PageShell title="Мой кабинет" isProtected>
			<div className="flex flex-col items-center">
				<img src={data?.user?.image!} className="rounded-full border-4 border-zinc-700" />
				<p className="mt-4 text-zinc-300 text-xl">
					{data?.user?.name} <span className="text-zinc-400">({data?.user?.email!})</span>
				</p>
			</div>
		</PageShell>
	)
}

export default Cabinet