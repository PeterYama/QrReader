import { Alert } from "react-native";

class Mongo {
  
  constructor(data){
    this.data = data;
  }

 async fetchJson(data){
    let doc = await fetch(data, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("Query Successfull: "+ JSON.stringify(json))
      })
      .catch(rejection => 
        console.log("rejection: " + rejection + " data is: " + data),
      )
      return doc;
  }

  async fetchJsonArray(data){
    await fetch(data, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }     
    })
      .then(response => response.json())
      .then(json => {
        console.log("Query Successfull: "+ json)
        return json
      })
      .catch(rejection => 
        console.log("rejection: " + rejection + " data is: " + data),
      )
  }

}

export default Mongo;