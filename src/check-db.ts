
import 'dotenv/config';
import prisma from './lib/prisma.js';

async function main(): Promise<void> {
  await prisma.$connect();

  const users = await prisma.user.findMany();

  console.log('Database connection successful!');
  console.log('Users:', users);
}

main()
  .catch((error: unknown) => {
    console.error('Database check failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

