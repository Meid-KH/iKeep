import Head from "next/head";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>iKeep, not your average note app!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<h1 className="">
					Welcome to <a href="#">ikeep</a>!
				</h1>

				<p className="">
					Get started by editing <code className="">pages/index.js</code>
				</p>
			</div>
		</div>
	);
}
