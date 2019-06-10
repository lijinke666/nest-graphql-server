import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  private readonly users: User[] = [{ id: 1, name: '李金珂', age: 18 }];

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number): User {
    return this.users.find(cat => cat.id === id);
  }

  update(user: User): User {
    if (!user.id) {
      throw new BadRequestException('id 不能为空!')
    }
    const index = this.users.findIndex(({ id }) => id === user.id);
    this.users.splice(index, 1, user);
    return user;
  }
}
