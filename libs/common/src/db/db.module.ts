import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigsModule } from '../configs';

@Module({
  imports: [
    ConfigsModule,
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {
  static forFeature(features: ModelDefinition[]) {
    return MongooseModule.forFeature(features);
  }
}
