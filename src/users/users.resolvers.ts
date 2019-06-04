import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) {}
  @Query()
  async getUsers() {
    return await this.usersService.findAll();
  }
}
