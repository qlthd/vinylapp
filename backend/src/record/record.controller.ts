import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RecordService } from "./record.service";
import { Record } from "./record.model";

@Controller('record')
export class RecordController {
    constructor(
        private readonly recordService: RecordService
    ){}

    @Post()
    create(@Body() createRecordDto: Record) {
        return this.recordService.create(createRecordDto);
    }

    @Get()
    findAll() {
        return this.recordService.findAll();
    }

    @Get(':name')
    findByName(@Param('name') name: string) {
        return this.recordService.findByName(name);
    }
}