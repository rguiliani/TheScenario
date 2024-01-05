import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateDataDto } from './dto/UpdateData.dto';

@Controller("data")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Post()
  create(@Body('data') data: string) {
    return this.appService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const res = this.appService.delete(id)
    return res
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataDto: UpdateDataDto) {
    return this.appService.update(id, updateDataDto)
  }
}
