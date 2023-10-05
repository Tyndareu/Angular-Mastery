import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: "dbz-list",
  templateUrl: "./list.component.html",
})
export class ListComponent {
  @Input()
  public characterList: Character[];

  @Output()
  public onDeleteIDChart: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.characterList = [
      {
        id: "",
        name: "",
        power: 0,
      },
    ];
  }

  deleteChart(id: string): void {
    this.onDeleteIDChart.emit(id);
  }
}
