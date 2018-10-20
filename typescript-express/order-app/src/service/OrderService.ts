import { OrderItem } from '../models/OrderItem';
import {OrderRepository}  from '../repository/OrderRepository'




class OrderService{
  
      private repository: OrderRepository;
  
     
  
      constructor(){
        this.repository=new OrderRepository();
        
      }
  
  
     createOrderItem(order : OrderItem): OrderItem{        
      
        console.log("creating order item with info "+order.toString());
        if( order !=null){
          return this.repository.saveOrder(order);
        }
       return null;
       
     }
  
      getOrderItem(orderId : number) : any{
        
        
        console.log("Getting order item with info "+orderId);
        if( orderId !=undefined && typeof orderId === "number"){
          return this.repository.getOrder(orderId);
        }
       return null;
        
      }
  
  
  
}

export {OrderService}

