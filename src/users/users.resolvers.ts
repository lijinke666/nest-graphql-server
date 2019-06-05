import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../graphql.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub()

@Resolver('Users')
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) { }

  @Query('users')
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Query('user')
  async getUserById(@Args('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.findOneById(id);
  }

  @Mutation('createUser')
  async create(@Args('createUserInput') user: CreateUserDto): Promise<User> {
    const createUser = await this.usersService.create(user);
    pubSub.publish('createUser', { catCreated: createUser });
    return createUser;
  }

  @Subscription('userCreated')
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }
}
