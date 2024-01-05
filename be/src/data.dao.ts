import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Data } from "./data.db";
import { UpdateDataDto } from "./dto/UpdateData.dto";

@Injectable()
export class DataDao {

    constructor(
        @InjectModel(Data.name, "local")
        private dataModel: Model<Data>,
    ) {

    }
    async get(id: string) {
        return this.dataModel.findById(id);
    }

    async getAll() {
        return this.dataModel.find();
    }

    async create(data: Data) {
        return this.dataModel.create(data);
    }

    async delete(id: string) {
        return this.dataModel.deleteOne({ _id: id })
    }

    async update(id: string, updateDataDto: UpdateDataDto) {
        return this.dataModel.updateOne({ _id: id }, { $set: updateDataDto })
    }
}