import { User } from "./user";

export class Message {
    id?:string;
    emetteur?:User;
    recepteur?:User;
    date?:string;
    texte?:string;
}
