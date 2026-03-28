import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
     public getHello(): string {
        return "Wow wow";
    }

    public introduce(): string {
        return "My name is Netanyahu";
    }
}
