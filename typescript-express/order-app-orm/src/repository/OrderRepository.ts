import { OrderItem } from '../entity/OrderItem';
import {DatabaseConfig} from '../config/db_config';
import { Repository } from 'typeorm';
 
class OrderRepository{
  
    private dbConfig : DatabaseConfig;
    
    private orderRepository: Repository<OrderItem>;
  
    constructor(){
       
       this.dbConfig=new DatabaseConfig();
     
    }
    public saveOrder(order : OrderItem): Promise<OrderItem>{
      
      let savedOrder=this.getRepository().save(order);
      console.log("order saved "+savedOrder); 
      return savedOrder;
    }
  
    public getOrder(orderId : number): Promise<OrderItem>{
        
       let order= this.orderRepository.findOneById(orderId);
       console.log("Got order with order id  "+orderId);
       return order;
    }
  
   public getRepository() : Repository<OrderItem> {
     
     if(this.orderRepository == null || this.orderRepository == undefined){
       console.log("order repository is null");
       return this.orderRepository=this.dbConfig.getConnection().getRepository(OrderItem);
     }
     return this.orderRepository;
   }
   
  
  
}

export {OrderRepository}