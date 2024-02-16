import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ServiceSchema } from './schemas/service.schema';
import { BookController } from './serviceItem.controller';
import { AdminService } from './serviceItem.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Service', schema: ServiceSchema }]),
  ],
  controllers: [BookController],
  providers: [AdminService],
})
export class AdminServiceModule {}
