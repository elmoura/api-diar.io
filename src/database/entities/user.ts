import { IUser } from "@database/interfaces/user";
import { Column, ObjectIdColumn } from "typeorm";

export class User implements IUser {
  @ObjectIdColumn()
  userId: string;
  
  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column()
  cellphone: string;
  
  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @Column()
  birthDate: string;
}