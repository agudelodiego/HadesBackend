import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'products'})
export class Product {

  @PrimaryGeneratedColumn()
  id: number

  @Column({unique:true})
  sku: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  weight: number

  @Column()
  stock: number

  //! Pending
  @Column({nullable:true})
  categories: string

  //! Pending
  @Column({nullable:true})
  images: string
}
