import {OrderItem} from '../models/OrderItem';
import * as express from 'express';

class ObjectMapper{
  
  
  public convertToOrder(req : express.Request): OrderItem{
        
        return new OrderItem(req.body.orderId,req.body.productName,
                             req.body.locationName,
                              req.body.quantity,
                            req.body.amount,
                          req.body.consumerId);
    
  }
  
  
  
  
 
 
  
}

export {ObjectMapper};