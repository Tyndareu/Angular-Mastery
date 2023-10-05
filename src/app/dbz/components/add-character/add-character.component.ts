import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  public character: Character;

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor() {
    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }

  saveCharacter(): void {
    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }
}
