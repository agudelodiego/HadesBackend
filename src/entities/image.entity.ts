import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";


@Entity({name:'Images'})
export class Image {

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  url:string

  @ManyToOne(()=> Product, product => product.images)
  product: Product
}