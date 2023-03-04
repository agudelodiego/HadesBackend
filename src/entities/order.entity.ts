import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'orders'})
export class Order {

  @PrimaryGeneratedColumn()
  id: number

  @Column({default:'pending'})
  state:string

  @Column({nullable:true})
  billingAddress: string

  @Column({nullable:true})
  shipmentAddress: string

  @Column({
    type:'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  date: Date

  //! Pending
  @Column({nullable:true})
  shoppingCart:string

  //! Pending
  @Column({nullable:true})
  user:string

}