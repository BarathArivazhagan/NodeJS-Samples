import { OrderItem } from '../entity/OrderItem';
import {OrderRepository}  from '../repository/OrderRepository'




class OrderService{
  
      private repository: OrderRepository;
  
     
  
      constructor(){
        this.repository=new OrderRepository();
        
      }
  
  
     createOrderItem(order : OrderItem): Promise<OrderItem>{        
      
        console.log("creating order item with info "+order.toString());
        if( order !=null){
          return this.repository.saveOrder(order);
        }
       return null;
       
     }
  
      getOrderItem(orderId : number) : Promise<OrderItem>{
        
        
        console.log("getting order item with order id "+orderId);      
        return this.repository.getOrder(orderId);
      
        
      }
  
  
  
}

export {OrderService}

