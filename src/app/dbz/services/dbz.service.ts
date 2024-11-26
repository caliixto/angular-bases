import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import {v4 as uuid} from "uuid";


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public Characters: Character[] = [{
    id :uuid(),
    name:"Krillin",
    power: 1000
  },{
    id :uuid(),
    name:"Goku",
    power: 9500
   },{
    id :uuid(),
    name:"Vegetta",
    power: 7500
   }];


   addCharacter(character:Character):void{


  const newCharacter:Character= {id: uuid(),...character}

  this.Characters.push(newCharacter);
   }


   //onDelete (index:number):void{
  // this.Characters.splice(index,1);
   //}


   deleteCharacterById(id:string){
    this.Characters = this.Characters.filter( character => character.id !==id);
   }


}
