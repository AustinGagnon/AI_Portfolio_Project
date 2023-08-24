// import image1 from './assets/smile.png';
import * as tf from '@tensorflow/tfjs';

class CA {
    private grid : number[][][];
    private tensorA : tf.Tensor | undefined;
    private row : number;
    private col : number;
    private width : number;
    private height : number;
    private canvasID : string;
    private canvas?: HTMLCanvasElement;
    private ctx?: CanvasRenderingContext2D;
    private offsetX : number;
    private offsetY : number;

    private filter = [[0.1, 0.1, 0.1],
                      [0.1, 1, 0.1],
                      [0.1, 0.1, 0.1]];

    public constructor(row: number, width: number, height: number, canvasID: string) {
        this.grid = [];
        this.row = row;
        this.col = Math.floor(row * (width / height));
        this.width = width;
        this.height = height;
        this.canvasID = canvasID;
        this.offsetX = this.width / this.col;
        this.offsetY = this.height / this.row;
        


        for (let i = 0; i < this.col; i++) {
            const temp = [];
            for (let j = 0; j < row; j++) {
                temp.push(createCell());
            }
            this.grid.push(temp);
        }

    }

    public initCanvas() {
        this.canvas = document.getElementById(this.canvasID) as HTMLCanvasElement;
        if (this.canvas) {
            this.tensorA = tf.tensor(this.grid);
            console.log(this.tensorA);
            this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.drawMap();
            this.maskPass();
            // this.drawMap();
            return true;
        }
        return false;
    }

    public maskPass() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                const up = (i - 1 < 0) ? this.col - 1 : i - 1;
                const down = (i + 1 >= this.col) ? 0 : i + 1;
                const left = (j - 1 < 0) ? this.row - 1 : j - 1;
                const right = (j + 1 >= this.row) ? 0 : j + 1;
                
                const top_left = this.grid[up][left][0] * this.filter[0][0];
                const top = this.grid[up][j][0] * this.filter[0][1];
                const top_right = this.grid[up][right][0] * this.filter[0][2];
                const left2 = this.grid[i][left][0] * this.filter[1][0];
                const right2 = this.grid[i][right][0] * this.filter[1][2];
                const bottom_left = this.grid[down][left][0] * this.filter[2][0];
                const bottom = this.grid[down][j][0] * this.filter[2][1];
                const bottom_right = this.grid[down][right][0] * this.filter[2][2];

                this.grid[i][j][0] += top_left + top + top_right + left2 + right2 + bottom_left + bottom + bottom_right;
                this.grid[i][j][0] %= 255;

            }
        }
    }

    public drawMap() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                const cell = this.grid[i][j];
                if (this.ctx){
                    this.ctx.fillStyle = `rgb(${cell[0]*255}, ${cell[1]*255}, ${cell[2]*255})`;
                    this.ctx.fillRect(i * this.offsetX, j * this.offsetY, this.offsetX, this.offsetY);
                }
            }
        }
    }
}

function createCell() {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    const a = Math.random();
    return [r, g, b, a];
}




export default CA;