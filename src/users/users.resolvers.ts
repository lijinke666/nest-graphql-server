import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../graphql.schema';

@Resolver('Users')
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) { }

  @Query()
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Query('user')
  async getUserById(@Args('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.findOneById(id);
  }
}
