import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
    public characterList: Character[] = [{
      name: "Trunk",
      power: 10
    }];

    @Output()
  onDelete : EventEmitter<string>= new EventEmitter;


    onDeleteCharacter(id?: string):void{
      //TODO:Emitir el Id del Personaje

      if (!id) return;

      this.onDelete.emit(id);
    }
}
