import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { BookController } from './serviceItem.controller';
import { BookService } from './serviceItem.service';
// import { BookSchema } from './schemas/book.schema';
import { ServiceSchema } from './schemas/service.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Book', schema: ServiceSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
