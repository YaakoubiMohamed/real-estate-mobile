import { User } from "./user";

import Timestamp = firebase.firestore.Timestamp;
import * as firebase from "firebase";

export class Annonce {
    id?:string;
    prix?:string;
    titre?:string;
    surface?:number;
    nbr_piece?:number;
    description?:string;
    type?:string;
    etage?:number;
    adresse?:string;
    date?:Timestamp;
    available?:Boolean;
    user?:User;
    photo?:String[];
}
