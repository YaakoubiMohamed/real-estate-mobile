import { User } from "./user";

export class Publication {
    id?:string;
    titre?:string;
    texte?:string;
    photo?:string[];
    user?:User;
    date?:string;
}
