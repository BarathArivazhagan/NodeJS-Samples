import * as mysql from 'mysql';

class DatabaseConfig{
  
     private connection : any;
  
    constructor(){
      
       this.createConnection();
    }
  
    createConnection() : void {
      
      console.log("creating mysql connection");
      let connection= mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "root",
                    database: "testdb"
                 });
      
       connection.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          
      });
       this.connection=connection;
     }
  
   public getConnection() : any{       
       return this.connection;
   }
  
  public setConnection(connection : any): void{      
      this.connection=connection;
  }
  
  
  
    
  
  
  
}

export  { DatabaseConfig}