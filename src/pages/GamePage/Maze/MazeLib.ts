// Class to create maze in 2d integer array. Each cell will be given a 5 bit mask to represent walls and visited status.
// 1st bit: top wall (most significant bit)
// 2nd bit: right wall
// 3rd bit: bottom wall
// 4th bit: left wall
// 5th bit: visited status (least significant bit)

class MazeLib {
    private maze : number[][];
    private row : number;
    private col : number;
    private start : number[];
    private end : number[];

    public constructor(row: number, col: number) {
        this.maze = [];
        this.row = row;
        this.col = col;
        this.start = [0, 0];
        this.end = [row - 1, col - 1];
        for (let i = 0; i < row; i++) {
            const row = [];
            for (let j = 0; j < col; j++) {
                const temp = Math.floor(Math.random() * 6)
                row.push(temp & 30)
            }
            this.maze.push(row);
        }
        // Create borders around edge of maze
        this.borderMasks();
        // Place starting and ending points
        this.keyPoints();
    }

    private keyPoints() {
        const startPoint = document.querySelector(`#cell_${this.start[0]}_${this.start[1]}`);
        const endPoint = document.querySelector(`#cell_${this.end[0]}_${this.end[1]}`);
        startPoint?.classList.add('start');
        endPoint?.classList.add('end');
    }

    private borderMasks() {
        for (let i = 0; i < this.row; i++) {
            this.maze[i][0] |= 16;
            this.maze[i][this.col - 1] |= 4;
        }
        for (let i = 0; i < this.col; i++) {
            this.maze[0][i] |= 2;
            this.maze[this.row - 1][i] |= 8;
        }
    }

    public drawMaze() {
        for (let i = 0; i < this.row; i++) {
            const row = this.maze[i];
            for (let j = 0; j < this.col; j++) {
                // cellElement
                const cell = row[j];
                const cellElement = document.getElementById(`cell_${i}_${j}`);
                if (cell & 16) cellElement?.classList.add('top_wall');
                if (cell & 8) cellElement?.classList.add('right_wall');
                if (cell & 4) cellElement?.classList.add('bottom_wall');
                if (cell & 2) cellElement?.classList.add('left_wall');
            }
        }
    }


    public getMaze() {
        return this.maze;
    }

}

export default MazeLib;
