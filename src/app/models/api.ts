import { ContactList } from './contact-list.model';

 export class Api {
     constructor(
        public stautsCode:number,
        public message:string,
        public data:Array<any>
     ){}
 }