import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { ShoppingCart } from "./shoppincart.model";


export type OrderDocument = HydratedDocument<Order>
@Schema()
export class Order {

  @Prop({default:'pending'})
  state:string

  @Prop({required:true})
  billingAddress: string

  @Prop()
  shipmentAddress: string

  @Prop({ default: Date.now() })
  date: Date

  @Prop({ 
    type: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'ShoppingCart' 
    }] 
  })
  shoppingCarts:ShoppingCart[]

}
export const OrderSchema = SchemaFactory.createForClass(Order)