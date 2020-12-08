export class Person {

    private _id: number;
    private _nom: string;
    private _prenom: string;
    private _numero: number;
    private _rue: string;
    private _cp: number;

    constructor(id: number, nom: string, prenom: string, numero: number, rue: string, cp: number){

        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._numero = numero;
        this._rue = rue;
        this._cp = cp;
    }

    public get id():number{
        return this.id;
    }
    public get nom():string{
        return this.nom;
    }
    public set nom(nom:string){
        this.nom = nom;
    }
    public get prenom():string{
    return this.prenom;
    }
    public set prenom(prenom:string){
        this.prenom = prenom;
    }
    public get numero():number{
        return this.numero;
        }
    public set numero(numero:number){
        this.numero = numero;
        }
    public get rue():string{
            return this.rue;
            }
    public set rue(rue:string){
        this.rue = rue;
        }
    public get cp():number{
        return this.cp;
        }
    public set cp(cp:number){
        this.cp = cp;
        }

}