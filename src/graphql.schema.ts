
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateUserInput {
    name?: string;
    age?: number;
}

export class UpdateUserInput {
    id: number;
    name?: string;
    age?: number;
}

export abstract class IMutation {
    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput?: UpdateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;
}

export abstract class ISubscription {
    abstract userCreated(): User | Promise<User>;
}

export class User {
    id?: number;
    name?: string;
    age?: number;
}
