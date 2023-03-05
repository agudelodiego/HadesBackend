import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'users'})
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({unique:true})
  uid: string

  @Column({unique:true})
  username: string

  @Column({unique:true})
  email: string

  @Column()
  password: string

  @Column({nullable:true})
  authStrategy: string

  @Column({
    type:'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date

  @Column({default:false})
  emailVerified: boolean

  @Column({nullable:true})
  billingAddress: string

  @Column({nullable:true})
  shipmentAddress: string

  @Column({nullable:true})
  contry: string

  @Column({nullable:true})
  phone: string

  @Column({default:false})
  isAdmin: boolean

  //! Pending
  @Column({nullable:true})
  photo: string

}