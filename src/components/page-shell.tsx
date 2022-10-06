import Head from "next/head";
import Link from "next/link";

const routes = [
	{ name: "Страница учителя", route: "/teacher" },
	{ name: "Страница студента", route: "/student" },
	{ name: "Помощь по сайту", route: "/help" }
]

const PageShell = ({
	children,
	title
}: {
	children: React.ReactNode;
	title: string;
}) => {

	return (
		<>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ title } />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

    </>
	)
}

export default PageShell