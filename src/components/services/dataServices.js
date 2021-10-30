import axios from "axios";

export default async function getDataBands() {
    // console.log('body=>>', body)
     
        try {
          const response = await axios.get(`http://localhost:3000/bands`);
  
          // console.log(response.data)
  
          console.log('data ==> ', response.data)

          return response.data
          
  
          
        } catch (err) {
          console.log('Error en traer data de bandas => ',err);
        }
      };
    

