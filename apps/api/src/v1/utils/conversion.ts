import { nbeScraper } from './scrapers';


export const toEtbNbeScrape = async (amount:number): Promise<number | null> => {
  
const usdRate:number|null = await nbeScraper();
if(usdRate == 0){
    return null;
  }else {
    return amount / usdRate;
  
  }
}

