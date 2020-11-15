import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";

export class UserCreateDto {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birthdate: Date;
}

export class UserUpdateDto {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birthDay: Date;
    roles: RoleModel[];
    groups: GroupModel[];
}

export class UserLoginDto {
    email: string;
    password: string;
}