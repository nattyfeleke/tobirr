import { awashScraper, nbeScraper } from './scrapers';


export const toEtbNbe = async (amount:number): Promise<number | null> => {
  
const usdRate:number|null = await nbeScraper();
if(usdRate == 0){
    return null;
  }else {
    return amount / usdRate;
  
  }
}

export const toEtbAwash = async (amount:number): Promise<number | null> => {
  
  const usdRate:number|null = await awashScraper();
  if(usdRate == 0){
      return null;
    }else {
      return amount / usdRate;
    
    }
  }
  