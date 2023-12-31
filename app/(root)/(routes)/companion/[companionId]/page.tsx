import { CompanionForm } from "@/app/(root)/(routes)/companion/[companionId]/components/companionForm"
import prismadb from "@/lib/prismadb"
import { auth, redirectToSignIn } from "@clerk/nextjs"

interface CompanionIdPageProps{
    params:{
        companionId:string
    }
}

const CompanionIdPage=async ({params}:CompanionIdPageProps)=>{
const {userId}=auth()

if(!userId){
    return redirectToSignIn()
}
    const companion=await prismadb.companion.findUnique({
        where:{
            id:params.companionId,
            userId
        }
    })

    const categories= await prismadb.category.findMany()
    return (<div>

       <CompanionForm initialData={companion} categories={categories}/>
    </div>)
}


export default CompanionIdPage