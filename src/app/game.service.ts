import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  currentPlayer: string = 'X';
  winner: string | null = null;
  isDraw: boolean = false;

  constructor() {}
  makeMove(row: number, col: number): void {
    if (this.board[row][col] === '' && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      this.checkWin();
      this.checkDraw();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  private checkWin(): void {
    const winningCombos = [
      [
        { r: 0, c: 0 },
        { r: 0, c: 1 },
        { r: 0, c: 2 },
      ],
      [
        { r: 1, c: 0 },
        { r: 1, c: 1 },
        { r: 1, c: 2 },
      ],
      [
        { r: 2, c: 0 },
        { r: 2, c: 1 },
        { r: 2, c: 2 },
      ],
      // Columns
      [
        { r: 0, c: 0 },
        { r: 1, c: 0 },
        { r: 2, c: 0 },
      ],
      [
        { r: 0, c: 1 },
        { r: 1, c: 1 },
        { r: 2, c: 1 },
      ],
      [
        { r: 0, c: 2 },
        { r: 1, c: 2 },
        { r: 2, c: 2 },
      ],
      // Diagonals
      [
        { r: 0, c: 0 },
        { r: 1, c: 1 },
        { r: 2, c: 2 },
      ],
      [
        { r: 0, c: 2 },
        { r: 1, c: 1 },
        { r: 2, c: 0 },
      ],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        this.board[a.r][a.c] &&
        this.board[a.r][a.c] === this.board[b.r][b.c] &&
        this.board[a.r][a.c] === this.board[c.r][c.c]
      ) {
        this.winner = this.board[a.r][a.c];
        return;
      }
    }
  }

  private checkDraw(): void {
    this.isDraw = this.board.every((row) => row.every((cell) => cell !== ''));
  }

  resetGame(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }
}
