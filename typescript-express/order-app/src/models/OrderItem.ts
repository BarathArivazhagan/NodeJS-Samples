/**
 * Order_item class
 */
 class OrderItem{
  
    private orderId: number;
    
    private productName: string;
  
    private locationName : string;  
   
    private quantity: number;
  
    private consumerId : number;
  
    private amount : number;
  
   constructor(orderId : number ,productName: string ,locationName : string ,quantity : number  ,amount : number ,consumerId : number ){
      
      this.orderId=orderId;
      this.productName=productName;
      this.locationName=locationName;
      this.quantity=quantity;
      this.amount=amount;
      this.consumerId=consumerId;
   }
  
   public getOrderId(): number {
     return this.orderId
   }
  
  public setOrderId(orderId : number) : void {
     this.orderId=orderId;
  }
  
  public getProductName(): string{
    
    return this.productName;
  }
  
  public setProductName(productName : string) : void {
    this.productName = productName;
  }
  
  public getLocationName(): string{
    
    return this.locationName;
  }
  
  public setLocationName(locationName : string) : void {
    this.locationName = locationName;
  } 
  
  
  
  public setQuantity(quantity : number) : void {
    this.quantity = quantity;
  } 
  
    public getQuantity(): number{
    
    return this.quantity;
  }
  
  public setAmount(amount : number) : void {
    this.amount = amount;
  } 
  
  
  public getAmount(): number{
    
    return this.amount;
  }
  
  public setConsumerId(consumerId : number) : void {
    this.consumerId = consumerId;
  } 
  
  
  public getConsumerId(): number{
    
    return this.consumerId;
  }
  
  
  public toString() : string{
    
     return " `order Id` "+this.orderId+" `product name `"+this.productName+
            "`location name` "+this.locationName+" `price` "+this.amount+" `quantity` "+this.quantity
       +"consumer id "+this.consumerId;
  }
  
  
  
  
}

export {OrderItem}