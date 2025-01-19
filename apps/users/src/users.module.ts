import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DbModule } from '@app/common';
import { User, UserSchema } from './entity/user.entity';

@Module({
  imports: [
    DbModule,
    DbModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
