import { Injectable } from '@nestjs/common';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  private readonly users: User[] = [{ id: 1, name: '李金珂', age: 18 }];

  create(cat: User): User {
    this.users.push(cat);
    return cat;
  }

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number): User {
    return this.users.find(cat => cat.id === id);
  }
}
