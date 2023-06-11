import { IUser } from "./user.model";

export interface IPost {
    user: IUser;
    msg: string;
}