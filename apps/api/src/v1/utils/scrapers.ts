import axios from 'axios'
import cheerio,{load} from 'cheerio';

export const nbeScraper = async (): Promise<number | null> =>{
    try {
        let usdAmount = 0;
        const {data} = await axios.get('https://market.nbebank.com/market/banks/index.php')
        const $ = load(data);
        const tableRows = $('table tbody tr').slice(1);
        // console.log(tableRows)
        tableRows.each((index, element) => {
          // console.log(element)
          const columns = $(element).find('td');
          const currency = $(columns[1]).text().trim();
          const buyRate = $(columns[2]).text().trim();
          const sellRate = $(columns[3]).text().trim();
          // console.log(`${currency} - Buy rate: ${buyRate} | Sell rate: ${sellRate}`);
       
          if(currency == 'US Dollar'){
            console.log(`${currency} - Buy rate: ${buyRate} | Sell rate: ${sellRate}`);
            usdAmount = Number(sellRate);
               
          }
        
        })
        return usdAmount;
  
      } catch (error) {
        console.log('error');
        return null;
      }
}