import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [DbModule, ConfigsModule]
})
export class CommonModule {}
