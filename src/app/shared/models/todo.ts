import { v4 as uuid } from 'uuid';

export class Todo {

    private _id: string;
    description: string;
    etat: boolean;

    constructor(description: string, etat: boolean = false){
        
        /**
         * Identifiant unique
         * @see https://www.npmjs.com/package/uuid
         */
        this._id = uuid();

        this.description = description;
        this.etat = etat;
    }

    get id(): string {
        return this._id;
    }

}
