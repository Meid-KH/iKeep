const faker = require("faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const data = Array.from({ length: 100 }).map(() => ({
	title: faker.lorem.sentence(),
	content: faker.lorem.sentence(),
}));

async function main() {
	await prisma.note.createMany({
		data: data,
	});
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
