import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrl: './game-cell.component.scss',
})
export class GameCellComponent {
  @Input() row!: number;
  @Input() col!: number;

  constructor(public gameService: GameService) {}
  onClick(): void {
    this.gameService.makeMove(this.row, this.col);
  }
}
