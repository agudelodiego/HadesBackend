import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'shoppingcarts'})
export class ShoppingCart {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  date:Date

  @Column({default:'pending'})
  state: string

  @Column()
  total: number

  //! Penging
  @Column({nullable:true})
  user: string

  //! Pending
  @Column({nullable:true})
  products: string

}