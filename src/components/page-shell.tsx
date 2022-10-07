import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "../hooks/useUser";

const routes = [
	{ name: "Страница 1", route: "/1" },
	{ name: "Страница 2", route: "/2" },
	{ name: "Страница 3", route: "/3" }
]

const PageShell = ({
	children,
	title,
	isProtected=false
}: {
	children: React.ReactNode;
	title: string;
	isProtected: boolean
}) => {

	return (
		<>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ title } />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthHandler protected={ isProtected }>
	      <nav className="bg-zinc-800 p-3 text-zinc-50">
	      	<div className="m-auto w-7/12 flex">
		      	<h1 className="text-lg cursor-pointer font-medium border-2 px-2 rounded hover:text-sky-300 hover:border-sky-300">
			        ⊙il-gas
			      </h1>
			      <div className="flex">
				      { routes.map(({ name, route }) =>
			      		<div key={ name } className="ml-3 text-sm hover:text-zinc-300 cursor-pointer font-medium flex items-center first:ml-10">
			      			<Link href={route}>
			      				{ name }
			      			</Link>
			      		</div>
				      ) }
			      </div>
		      </div>
	      </nav>

	      <main className="min-w-max min-h-screen bg-zinc-900 text-zinc-50">
	      	<div className="m-auto w-7/12">
	        	{ children }
	        </div>
	      </main>

	      <footer className="bg-zinc-900 p-3 text-zinc-400 text-sm flex justify-end pr-6">
	      	© 2022 oil-gas
	      </footer>
      </AuthHandler>

    </>
	)
}

const AuthHandler = ({
	protected: isProtected,
	children
}: {
	protected: boolean;
	children: React.ReactNode;
}) => {

	const { data, status } = useSession();
	const router = useRouter()

	if (status === "loading") {
		return <div>Загрузка...</div>
	}

	if (isProtected && !data) {
		router.push("/api/auth/signin")
	}

	return (
		<UserContext.Provider value={data?.user}>
			{ children }
		</UserContext.Provider>
	)

}

export default PageShell