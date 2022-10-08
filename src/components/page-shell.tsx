import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "../hooks/useUser";
import Button from "./button";

const routes = [
	{ name: "Закупки", route: "/purchases" },
	{ name: "Продажи", route: "/sales" },
	{ name: "Статистика", route: "/statistics" }
]

const PageShell = ({
	children,
	title,
	isProtected=false
}: {
	children: React.ReactNode;
	title: string;
	isProtected?: boolean
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
	      	<div className="m-auto w-7/12 flex justify-between">
	      	 	<div className="flex items-center">
	      	 		<h1 className="text-lg cursor-pointer font-medium border-b-2 px-2 hover:text-emerald-300 hover:border-emerald-300">
				        <Link href="/">
				        	⊙il-gas
				        </Link>
				      </h1>
				      <div className="flex">
					      { routes.map(({ name, route }) =>
				      		<div key={ name } className="ml-3 text-sm hover:text-zinc-300 cursor-pointer font-medium flex items-center first:ml-6">
				      			<Link href={route}>
				      				{ name }
				      			</Link>
				      		</div>
					      ) }
				      </div>
	      	 	</div>
			      <AuthPanel />
		      </div>
	      </nav>

	      <main className="min-w-max min-h-screen bg-zinc-900 text-zinc-50">
	      	<div className="m-auto w-7/12 p-3 pt-6">
	        	{ children }
	        </div>
	      </main>

	      <footer className="bg-zinc-900 p-3 text-zinc-400 text-sm flex justify-end pr-6">
	      	© 2022, oil-gas
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

	if (isProtected && status === "loading") {
		return <div>Загрузка...</div>
	}

	if (isProtected && status === "unauthenticated") {
		router.push("/api/auth/signin")
	}

	return (
		<UserContext.Provider value={data?.user}>
			{ children }
		</UserContext.Provider>
	)
}

const AuthPanel = () => {

	const { status } = useSession();

	return (
		<div className="flex items-center">
			{ status === "loading" && <div>Загрузка...</div> }
			{ status === "authenticated" && <Button text="Выйти" onClick={() => signOut({
				callbackUrl: "http://localhost:3000"
			})} /> }
			{ status === "unauthenticated" && <Button style="light" text="Войти" onClick={() => signIn()} /> }
		</div>
	)
}

export default PageShell