import { NextPage } from "next"
import { useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"
import PageShell from "../components/page-shell"


const Cabinet: NextPage = () => {

	const { data } = useSession()

	return (
		<PageShell title="Мой кабинет" isProtected>
			<div className="flex flex-col items-center">
				<div className="rounded-full border-4 border-zinc-700 w-24 h-24 relative">
					<Image
						src={data?.user?.image || ""}
						alt="Не удалось загрузить изображение профиля"
						layout="fill"
    				objectFit="cover"
    				className="rounded-full"
					/>
				</div>
				<p className="mt-4 text-zinc-300 text-xl">
					{data?.user?.name} <span className="text-zinc-400">({data?.user?.email})</span>
				</p>
			</div>
		</PageShell>
	)
}

export default Cabinet