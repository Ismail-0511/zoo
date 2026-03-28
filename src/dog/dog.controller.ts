import { Controller, Get, Req } from '@nestjs/common';
import { DogService } from './dog.service';
import type { Request } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService:DogService) {}
    
        @Get()
        public getHello():string {
            return this.dogService.getHello();
        }
    
         @Get('greet/:id/:itemId')
        public introduce(@Req() request: Request):string {
            console.log('params:', request.params);
            return this.dogService.introduce();
        }
}