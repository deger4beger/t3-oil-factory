import Head from "next/head"


const Wrapper = ({ children }: {
	children: React.ReactNode
}) => {

	return (
		<>
			<Head>
		    <title>t3-store</title>
		    <meta name="description" content="t3-store" />
		    <link rel="icon" href="/favicon.ico" />
		  </Head>

		  <main className="">
		    { children }
		  </main>
		</>
	)

}

export default Wrapper