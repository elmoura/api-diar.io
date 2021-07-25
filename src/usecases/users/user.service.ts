import { IUser } from '@database/interfaces/user';
import { IUserRepository } from '@database/repositories/user.repository';
import { BadRequestException } from 'src/utils/errors/bad-request.error';

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async create(userPayload: Omit<IUser, 'userId'>): Promise<IUser> {
    // valida se ja existe usuario com email
    const userAlreadyExists = await this.userRepository.findByEmail(
      userPayload.email,
    );

    if (userAlreadyExists) {
      throw new BadRequestException('Já existe um usuário com esse e-mail.');
    }

    // criptografa senha

    // salva
    return this.userRepository.create(userPayload);
  }
}
