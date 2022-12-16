import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Button from "./button";
import { useRouter } from "next/router";

const routes = [
	{ name: "Операции", route: "/operations" },
	{ name: "Статистика", route: "/statistics" },
];

const PageShell = ({
	children,
	title,
	isProtected = false,
}: {
	children: React.ReactNode;
	title: string;
	isProtected?: boolean;
}) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={title} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AuthMiddleware protected={isProtected}>
				<nav className="bg-zinc-800 p-3 text-zinc-50">
					<div className="m-auto w-7/12 flex justify-between">
						<div className="flex items-center">
							<div className="flex">
								{routes.map(({ name, route }) => (
									<div
										key={name}
										className={
											"ml-4 mr-2 first:ml-0 text-sm hover:text-zinc-300 cursor-pointer font-medium flex items-center" +
											(router.pathname === route
												? " text-zinc-400 hover:text-zinc-400"
												: "")
										}
									>
										<Link href={route}>{name}</Link>
									</div>
								))}
							</div>
						</div>
						<AuthPanel />
					</div>
				</nav>
				<main className="min-w-max min-h-screen bg-zinc-900 text-zinc-50">
					<div className="m-auto w-7/12 p-2 pt-6">{children}</div>
				</main>
				<footer className="bg-zinc-900 p-3 text-zinc-400 text-sm flex justify-end pr-6">
					© 2022, oil-factory
				</footer>
			</AuthMiddleware>
		</>
	);
};

const AuthMiddleware = ({
	protected: isProtected,
	children,
}: {
	protected: boolean;
	children: React.ReactNode;
}) => {
	const { status } = useSession();
	const router = useRouter();

	if (isProtected && status === "loading") {
		return <div>Загрузка...</div>;
	}
	if (isProtected && status === "unauthenticated") {
		router.push("/api/auth/signin");
	}

	return <> {children} </>;
};

const AuthPanel = () => {
	const { status } = useSession();

	return (
		<div className="flex items-center">
			{status === "loading" && <div>Загрузка...</div>}
			{status === "authenticated" && (
				<>
					<div className="mr-2">
						<Link href="/cabinet">
							<Button style="light" text="🗝" />
						</Link>
					</div>
					<Button
						text="Выйти"
						onClick={() =>
							signOut({
								callbackUrl: "http://localhost:3000", // ## TODO: move url to .env
							})
						}
					/>
				</>
			)}
			{status === "unauthenticated" && (
				<Button style="light" text="Войти" onClick={() => signIn()} />
			)}
		</div>
	);
};

export default PageShell;
