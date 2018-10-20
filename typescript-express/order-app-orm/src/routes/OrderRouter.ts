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
         let savedOrder=this.orderService.createOrderItem(orderItem);
          if(savedOrder !=null){
            savedOrder.then(function(result){
                
                console.log("Result is "+result);
                res.json(result);
              });
            }else{
            res.json({ "message" : "Error in creating the order"});
          }
          
        });
    
          router.get("/api/order/:orderid",(req,res) => {
           
          let orderid=req.params.orderid;
          let order=this.orderService.getOrderItem(orderid);
          if(order != null){
            order.then(function(result){
              
              console.log("Result is "+result);
              res.json(result);
            });
          }else{
             res.json({ "message" : "No order found with order id "+orderid});
          }
       
        });
        
        console.log("order router definition "+router);
        express.use('/',router);
  }
  
  
  
}

export {OrderRouter};