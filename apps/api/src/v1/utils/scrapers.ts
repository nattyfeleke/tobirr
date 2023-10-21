import axios from 'axios'
import cheerio,{load} from 'cheerio';

export const nbeScraper = async (): Promise<number | null> =>{
    try {
        let usdAmount = 0;
        const {data} = await axios.get('https://market.nbebank.com/market/banks/index.php')
        const $ = load(data);
        console.log($)
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

export const awashScraper = async (): Promise<number | null> =>{
  console.log('got here on awashScraper')
  try {
      let usdAmount = 0;
      const {data} = await axios.get('https://www.awashbank.com/')
      const $ = load(data);
      console.log($)
      const elemSelector = "#text-5 > div > div > table > tbody > tr.wst_tr";
      // console.log(tableRows)
      $(elemSelector, data).each((index, element) => {
        console.log(index)
        const currency = $(element)
          .children(`.td_${index + 2}_1`)
          .text()
        // console.log(currency.trim())
        if (currency.trim() == "USD") {
          usdAmount = Number($(element)
            .children(`.td_${index + 2}_3`)
            .text()
            .trim())
        }
        
      })
      return usdAmount;

    } catch (error) {
      console.log('error');
      return null;
    }
}