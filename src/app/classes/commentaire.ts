import { User } from "./user";
import { Publication } from "./publication";

export class Commentaire{
    id!:string;
    texte!: string;
    user!: User;
    publication!: Publication;
    date!: string;
}