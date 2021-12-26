import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/redis-pub')
  async postRedisPub(@Body() reqBody) {
    console.log(`Redis published ${JSON.stringify(reqBody)} `);

    return `${reqBody} published received by NestJS subscriber`;
  }
}
