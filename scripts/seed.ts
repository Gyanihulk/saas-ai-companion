const {PrismaClient}=require("@prisma/client")

const db =new PrismaClient();

async function main() {
    try{
        await db.category.createMany({
            data:[
                {name:"Famous Person"},
                {name:"Phylosophy"},
                {name:"Gods"},
                {name:"Sports Person"},
                {name:"School Teacher"},
                {name:"Superhero"},
                {name:"Animals"},
                {name:"Scientist"},
            ]
        })

    }catch(error){console.error("Error seeding default categories",error)}finally{
        await db.$disconnect();
    }
}


main();