import { Request, Response } from "express";
import { toEtbNbeScrape } from "../utils/conversion";

 export const cbeConversion = async (req:Request,res:Response) => {
    const amount = Number(req.params.amount);
    try {
       const etbAmount = await toEtbNbeScrape(amount)
        res.json({
            status:'200',
            msg:'converted successfully',
            usd:amount,
            etb:etbAmount
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
        
    }
 }