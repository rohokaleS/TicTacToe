import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  constructor(public gameService: GameService) {}

  // Method to handle the reset button click event
  onReset(): void {
    // Call the game service to reset the game
    this.gameService.resetGame();
  }
}
