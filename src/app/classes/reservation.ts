import { User } from "./user";
import { Annonce } from "./annonce";

export class Reservation{
    id!: string;
    date!:string;
    user!: User;
    annonce!: Annonce;
    etat!: string;
}