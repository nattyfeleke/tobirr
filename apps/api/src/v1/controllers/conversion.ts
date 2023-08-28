import { Request, Response } from "express";
import { toEtbNbeScrape } from "../utils/conversion";
type Source = "cbe"|"nbe"|"awash"
 export const toBirrConversion = async (req:Request,res:Response) => {
    console.log('got on cbe conversion')
    console.log(req.query)
    const  {amount,source} = req.query;
     const amountTobeConverted = Number(req.query.amount);
    console.log('amount:', amount);
    try {
        let etbAmount:number;
        if(source==='nbe'){
            
            etbAmount = await toEtbNbeScrape(amountTobeConverted)
        }
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