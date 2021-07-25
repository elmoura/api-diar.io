import { Repository, getRepository } from 'typeorm';
import { User } from '@database/entities/user';
import { IUser } from '@database/interfaces/user';
import { IUserRepository } from '../user.repository';

export class MongoUserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async create(userPayload: Omit<IUser, 'userId'>): Promise<IUser> {
    return this.userRepository.save(userPayload);
  }
}
