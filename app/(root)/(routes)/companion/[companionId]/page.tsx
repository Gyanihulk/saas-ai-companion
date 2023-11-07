import { CompanionForm } from "@/app/(root)/(routes)/companion/[companionId]/components/companionForm"
import prismadb from "@/lib/prismadb"

interface CompanionIdPageProps{
    params:{
        companionId:string
    }
}

const CompanionIdPage=async ({params}:CompanionIdPageProps)=>{

    const companion=await prismadb.companion.findUnique({
        where:{
            id:params.companionId
        }
    })

    const categories= await prismadb.category.findMany()
    return (<div>

       <CompanionForm initialData={companion} categories={categories}/>
    </div>)
}


export default CompanionIdPage