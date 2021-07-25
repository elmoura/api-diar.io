import { IUser } from '@database/interfaces/user';

export interface IUserRepository {
  create(userPayload: Omit<IUser, 'userId'>): Promise<IUser>;

  // update(userId: string, partialUser: Partial<IUser>): Promise<IUser>

  findByEmail(email: string): Promise<IUser | undefined>;

  // findById(userId: string): Promise<IUser | undefined>
}
