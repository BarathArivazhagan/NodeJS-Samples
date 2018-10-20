import * as mysql from 'mysql';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {OrderItem} from "../entity/OrderItem";

class DatabaseConfig{
  
     private connection : any;
  
    constructor(){
      
       this.createConnection();
    }
  
    createConnection() : any {
      
      console.log("creating mysql connection");
      
      createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "root",
                database: "testdb",
                entities: [
                    OrderItem
                ],
            autoSchemaSync: true,
        }).then(connection => {
          
          console.log("setting the connection callback");
          this.connection=connection;
        }).catch(error => console.log(error));     
     }
  
   public getConnection() : any{       
       return this.connection;
   }
  
  public setConnection(connection : any): void{      
      this.connection=connection;
  }
  
  
  
    
  
  
  
}

export  { DatabaseConfig}