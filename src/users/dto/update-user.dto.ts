import { CreateUserDto } from "./create-user.dto";
import { IsNotEmpty } from "class-validator";
import { UpdateUserInput } from "../../graphql.schema";

export class UpdateUserDto extends UpdateUserInput {
  @IsNotEmpty()
  id: number;
}
