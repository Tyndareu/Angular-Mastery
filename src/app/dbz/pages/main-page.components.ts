import { Component, Input } from "@angular/core";
import { DbzService } from "../services/dbz.service";
import { Character } from "../interfaces/character.interface";

@Component({
  selector: "app-dbz-main-page",
  templateUrl: "main-page.component.html",
})
export class MainPageComponent {
  @Input()
  public chartID: string = "";

  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    return this.dbzService.onDeletedCharacter(id);
  }

  onNewCharacter(newCharacter: Character): void {
    return this.dbzService.onNewCharacter(newCharacter);
  }
}
