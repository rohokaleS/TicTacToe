import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameCellComponent } from './game-cell/game-cell.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [GameBoardComponent, GameCellComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [GameService],
  exports: [GameBoardComponent, GameCellComponent],
})
export class SharedModule {}
