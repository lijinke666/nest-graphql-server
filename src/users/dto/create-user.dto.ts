import { Min } from 'class-validator';
import { CreateUserInput } from '../../graphql.schema';

export class CreateUserDto extends CreateUserInput {
  @Min(1)
  age: number;
}
