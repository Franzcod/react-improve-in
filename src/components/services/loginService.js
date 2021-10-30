import axios from "axios";

export default async function loginService  (body) {
    // console.log('body=>>', body)
     
        try {
          const response = await axios.get(`http://localhost:3000/users`);
  
          // console.log(response.data)
  
          if (response.data) {
            // let resp = response.data.filter(el=> el.username === 'test_1'); 
              let resp = response.data.filter(el=> el.email === body.email && el.password === body.password); 
              
              if(resp.length){
                localStorage.setItem("user", JSON.stringify(resp));
              }
              
              return resp;
          }
          
  
          
        } catch (err) {
          console.log('Error en Login',err);
        }
      };
    

