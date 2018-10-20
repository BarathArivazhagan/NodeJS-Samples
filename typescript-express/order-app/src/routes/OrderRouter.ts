import * as express from 'express'
import {OrderService} from '../service/OrderService'
import {ObjectMapper }from '../utils/ObjectMapper';

class OrderRouter{
  
  
  public orderService: OrderService;
  
   private mapper: ObjectMapper;
  
  constructor() {
    
    this.orderService=new OrderService();
    this.mapper=new ObjectMapper();
   
  }
  
  public  initializeRoutes(express : express ,router : express.Router): void{
    
        
        console.log("router is getting configured");
        router.get('/', (req, res) => {
          res.json({
            message: 'WELCOME TO ORDER MICROSERVICE !'
          });
        });
        
   
        console.log("initializing  order routes");
        router.post("/api/order",(req,res) => {
           
           
           let orderItem=this.mapper.convertToOrder(req);
          console.log("save order item router invoked");
         
          res.json(this.orderService.createOrderItem(orderItem));
        });
    
          router.get("/api/order/{orderid}",(orderid,res) => {
           
          
          console.log("getting order item with order id "+orderid);
         
          res.json(this.orderService.getOrderItem(orderid));
        });
        
        console.log("order router definition "+router);
        express.use('/',router);
  }
  
  
  
}

export {OrderRouter};