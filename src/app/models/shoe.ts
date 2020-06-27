export class Shoe {
    id:number;
    nom:string;
    marque:string;
    type:string;
    taille:number;
    dateEntreStock:Date;
    constructor(id:number=null,nom:string=null,marque:string=null,type:string=null,taille:number=null,dateEntreStock:Date=null ){
        this.id = id;
        this.nom = nom;
        this.marque = marque;
        this.taille = taille;
        this.dateEntreStock = dateEntreStock;
    }
}
