import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './entity/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly repo: Model<User>) {}

  async insert() {
    return (await this.repo.create({ username: 'test', password: '12345678' })).toJSON();
  }
}
