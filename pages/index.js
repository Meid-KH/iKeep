import Head from "next/head";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getServerSideProps() {
	const data = await prisma.note.findMany();
	const notes = JSON.stringify(data);
	// console.log(notes);
	return {
		props: {
			notes,
		},
	};
}

export default function Home({ notes }) {
	const jsonData = JSON.parse(notes);
	console.log(jsonData);
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

				{jsonData.map((da, i) => {
					// console.log(da);
					return <p key={i}>Title : {da.title}</p>;
				})}

				<p className="">
					Get started by editing <code className="">pages/index.js</code>
				</p>
			</div>
		</div>
	);
}
