import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

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

  @ManyToMany(()=> Category, category => category.products)
  @JoinTable()
  categories: Category[]

  //! Pending
  @Column({nullable:true})
  images: string
}
