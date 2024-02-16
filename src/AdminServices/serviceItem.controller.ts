import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-service.dto';
import { UpdateBookDto } from './dto/update-service.dto';
import { BookService } from './serviceItem.service';
// import { Book } from './schemas/book.schema';
import { Service } from './schemas/service.schema';

import { AuthGuard } from '@nestjs/passport';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Service[]> {
    return this.bookService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(
    @Body()
    book: CreateBookDto,
    @Req() req,
  ): Promise<Service> {
    return this.bookService.create(book, req.user);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Service> {
    return this.bookService.findById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Service> {
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Service> {
    return this.bookService.deleteById(id);
  }
}
