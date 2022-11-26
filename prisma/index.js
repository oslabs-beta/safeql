const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
// ... you will write your Prisma Client queries here
    // const allUsers = await prisma.users.findMany()
    // console.log(allUsers)
    await prisma.users.create({
        data: {
            username: 'Collin',
            password: 'test1234'
        }
    })
    const allUsers = await prisma.users.findMany()
    console.log(allUsers)

}

  
main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })