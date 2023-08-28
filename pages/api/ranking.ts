import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb"

export default async function handler(req: NextApiRequest, res:NextApiResponse){

    try{

        console.log("here");
        

        const datas = await prisma.test.findMany({
            orderBy:{
                createdAt:"asc"
            }
        })

        

        if(!datas){
            console.log("None Data");
            
        }

        return res.status(200).json(datas)

    }catch(error){
        console.log(error);
        return res.status(400).json(error);
    }
}