import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



export type ItemSubDoc = HydratedDocument<Item>
@Schema()
export class Item {

  @Prop({required:true})
  product:string

  @Prop({required:true})
  quantity:number

  @Prop({required:true})
  subtotal:number

}


export type ShoppingCartDocument = HydratedDocument<ShoppingCart>;

@Schema()
export class ShoppingCart {
  
  @Prop({ default: Date.now() })
  date: Date

  @Prop({default: 'pending'})
  state:string

  @Prop({required:true})
  total:number

  @Prop({required:true})
  user:string

  @Prop({ type: ()=> [Item] })
  items: Item[]
  
}

export const ShoppingCartSchema = SchemaFactory.createForClass(ShoppingCart);