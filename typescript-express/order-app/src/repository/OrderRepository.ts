import { OrderItem } from '../models/OrderItem';
import {DatabaseConfig} from '../config/db_config';
 
class OrderRepository{
  
    private dbConfig : DatabaseConfig;
    
  
    constructor(){
       
       this.dbConfig=new DatabaseConfig();
    }
    saveOrder(order : OrderItem): OrderItem{
      
      var con=this.dbConfig.getConnection();
       var sql = "INSERT INTO order_items(orderid,productname,locationname,quantity,amount,consumerid) VALUES("+order.getOrderId()+",'" +order.getProductName() +"','"
         +order.getLocationName()+"','"
          +order.getQuantity()+"','"+order.getAmount()+"','"+order.getConsumerId()+"')";
      
      console.log("sql query "+sql);
      con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          });
      
      return order;
    }
  
    getOrder(orderId : number): any{
      
     let find_by_orderid_sql="SELECT * FROM order_items where orderid="+orderId;
     let test=this.executeSQL(find_by_orderid_sql);
      console.log("TEST "+test);
    }
   private executeSQL(query : string){
     
     
     console.log("executing the sql query "+query)
     var con=this.dbConfig.getConnection();
     return  con.query(query, this.resultCallback);
     
   }
  
   private resultCallback(err,result): any{
      if (err) throw err;
      console.log("result "+result);
     return result;
     
   }
  
  
}

export {OrderRepository}