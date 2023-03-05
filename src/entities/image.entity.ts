import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'Images'})
export class Image {

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  url:string

  //!Pending
  @Column()
  product:string
}