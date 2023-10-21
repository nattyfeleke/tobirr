import { Request, Response } from "express";
import { toEtbAwash, toEtbNbe } from "../utils/conversion";
type Source = "cbe"|"nbe"|"awash"
 export const toBirrConversion = async (req:Request,res:Response) => {
    console.log('got on cbe conversion')
    console.log(req.query)
    const  {amount,source} = req.query;
    if(!source) return res.status(400).json({
        status:'400',
        msg:'Please choose a source',
    })
     const amountTobeConverted = Number(req.query.amount);
    console.log('amount:', amount);
    try {
        let etbAmount:number;
        if(source==='nbe'){            
            etbAmount = await toEtbNbe(amountTobeConverted)
        }
        if(source==='awash'){            
            etbAmount = await toEtbAwash(amountTobeConverted)
        }
        res.json({
            status:'200',
            msg:'converted successfully',
            usd:amount,
            etb:etbAmount.toFixed(2)
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
        
    }
 }