import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/service.schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly service_title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly image: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please enter correct category.' })
  readonly category: Category;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
