import { Injectable } from '@nestjs/common';
import { DataDao } from './data.dao';
import { UpdateDataDto } from './dto/UpdateData.dto';

@Injectable()
export class AppService {

  constructor(
    private readonly dataDao: DataDao
  ){}

  async getAll() {
    return await this.dataDao.getAll()
  }

  async create(data: string) {
    return this.dataDao.create({ data })
  }

  async getById (id: string) {
    return this.dataDao.get(id)
  }

  async update (id: string, updateDataDto: UpdateDataDto) {
    return this.dataDao.update(id, updateDataDto)
  }

  async delete (id: string) {
    return this.dataDao.delete(id)
  }
}
