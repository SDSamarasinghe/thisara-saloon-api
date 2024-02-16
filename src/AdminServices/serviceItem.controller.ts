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
// import { BookService } from './serviceItem.service';
import { AdminService } from './serviceItem.service';
// import { Book } from './schemas/book.schema';
import { Service } from './schemas/service.schema';

import { AuthGuard } from '@nestjs/passport';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('books')
export class BookController {
  constructor(private adminService: AdminService) {}

  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Service[]> {
    return this.adminService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(
    @Body()
    book: CreateBookDto,
    @Req() req,
  ): Promise<Service> {
    return this.adminService.create(book, req.user);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Service> {
    return this.adminService.findById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Service> {
    return this.adminService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Service> {
    return this.adminService.deleteById(id);
  }
}
