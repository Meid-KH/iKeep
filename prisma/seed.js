const faker = require("faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const data = Array.from({ length: 10 }).map(() => ({
	title: faker.lorem.sentence(),
	content: faker.lorem.sentence(),
}));

async function main() {
	await prisma.note.createMany({
		data: data,
	});
		console.log(" seeeeeeeeeeeeeding !!!!");
}

main()
	.catch((e) => {
		console.log("Wa seeeeeeeeeeeeed");
		process.exit(0);
	})
	.finally(() => {
		prisma.$disconnect();
	});
