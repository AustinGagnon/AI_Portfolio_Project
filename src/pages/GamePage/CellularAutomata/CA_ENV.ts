// import image1 from './assets/smile.png';
// import * as tf from '@tensorflow/tfjs';

class CA_CONTROLLER {
    public ca: CA;
    private row: number;
    private width: number;
    private height: number;
    private canvasID: string;
    private filter: number[][] = [[0, 1, 0], [1, 0, 1], [0, 1, 0]]; 
    private activationType: string;

    public constructor(row: number, width: number, height: number, canvasID: string, activationType?: string) {
        this.row = row;
        this.width = width;
        this.height = height;
        this.canvasID = canvasID;
        this.activationType = activationType ? activationType : 'none';

        this.ca = new CA(row, width, height, canvasID, this.activationType, this.filter);
    }

    public resetCA() {
        this.ca = new CA(this.row, this.width, this.height, this.canvasID, this.activationType, this.filter);
    }

    public setFilter(filterRef: string[][]) {
        for (let i = 0; i < this.filter.length; i++) {
            for (let j = 0; j < this.filter[i].length; j++) {
                if (!isNaN((parseFloat(filterRef[i][j])))) {
                    this.filter[i][j] = parseFloat(filterRef[i][j]);
                }
            }
        }
    }

    public resetCANEW(row: number, width: number, height: number, canvasID: string) {
        this.row = row;
        this.width = width;
        this.height = height;
        this.canvasID = canvasID;

        this.ca = new CA(row, width, height, canvasID, this.activationType, this.filter);
    }

    public getRandomFilter() {
        const temp = []
        for (let i = 0; i < this.filter.length; i++) {
            const tempRow = []
            for (let j = 0; j < this.filter[i].length; j++) {
                tempRow.push(Math.random() * 2 - 1);
            }
            temp.push(tempRow);
        }
        return temp;
    }
}


class CA {
    private grid : number[][][];
    private row : number;
    private col : number;
    private width : number;
    private height : number;
    private canvasID : string;
    private canvas?: HTMLCanvasElement;
    private ctx?: CanvasRenderingContext2D;
    private offsetX : number;
    private offsetY : number;
    private playState : boolean = true;
    private filter: number [][]
    private activationType: string;

    public constructor(row: number, width: number, height: number, canvasID: string, activationType: string, filter?: number[][]) {
        this.grid = [];
        this.row = row;
        this.col = Math.floor(row * (width / height));
        this.width = width;
        this.height = height;
        this.canvasID = canvasID;
        this.offsetX = this.width / this.col;
        this.offsetY = this.height / this.row;
        this.activationType = activationType;
        this.filter = filter ? filter : [[0, 1, 0], [1, 0, 1], [0, 1, 0]];
        this.initGrid();
    }

    private initGrid() {
        this.grid = [];
        for (let i = 0; i < this.col; i++) {
            const temp = [];
            for (let j = 0; j < this.row; j++) {
                temp.push(createCell());
            }
            this.grid.push(temp);
        }
    }

    public resetGrid() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                this.grid[i][j][1] = 0;
                if (Math.random() < 0.001) {
                    this.grid[i][j][1] = 1;
                }
            }
        }
    }

    // public setFilter(filterRef: string[][]) {
    //     for (let i = 0; i < this.filter.length; i++) {
    //         for (let j = 0; j < this.filter[i].length; j++) {
    //             if (!isNaN((parseFloat(filterRef[i][j])))) {
    //                 this.filter[i][j] = parseFloat(filterRef[i][j]);
    //             }
    //         }
    //     }
    // }

    public getFilter() {
        return this.filter;
    }

    public getFilterByID(row: number, col: number) {
        return this.filter[row][col];
    }

    public initCanvas() {
        this.canvas = document.getElementById(this.canvasID) as HTMLCanvasElement;
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.playState = true;
            this.drawMap();
            return true;
        }
        return false;
    }

    public stop() {
        this.playState = false;
    }

    public play() {
        if (!this.playState) {
            console.log('stopped');
        }
        else {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    this.maskPass();
                    this.activationPass(this.activationType);
                    this.drawMap();
                    this.play();
                }, 1000 / 30);

            });
        }
        
    }

    private activationPass(activation: string) {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                if (activation === 'none') {
                    continue;
                }
                else if (activation === 'sigmoid') {
                    this.grid[i][j][1] = this.sigmoid(this.grid[i][j][1]);
                }
                else if (activation === 'relu') {
                    this.grid[i][j][1] = this.relu(this.grid[i][j][1]);
                }

            }
       }
    }

    private relu(z: number) {
        return Math.max(0, z);
    }

    private sigmoid(z: number) {
        return 1 / (1 + Math.exp(-z));
    }

    private maskPass() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                const up = (i - 1 < 0) ? this.col - 1 : i - 1;
                const down = (i + 1 >= this.col) ? 0 : i + 1;
                const left = (j - 1 < 0) ? this.row - 1 : j - 1;
                const right = (j + 1 >= this.row) ? 0 : j + 1;
                
                const top_left = this.grid[up][left][1] * this.filter[0][0];
                const top = this.grid[up][j][1] * this.filter[0][1];
                const top_right = this.grid[up][right][1] * this.filter[0][2];
                const left2 = this.grid[i][left][1] * this.filter[1][0];
                const right2 = this.grid[i][right][1] * this.filter[1][2];
                const bottom_left = this.grid[down][left][1] * this.filter[2][0];
                const bottom = this.grid[down][j][1] * this.filter[2][1];
                const bottom_right = this.grid[down][right][1] * this.filter[2][2];

                this.grid[i][j][1] += top_left + top + top_right + left2 + right2 + bottom_left + bottom + bottom_right;
                this.grid[i][j][1] = Math.min(.75, this.grid[i][j][1] / 2.5);
            }
        }
    }

    private drawMap() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                const cell = this.grid[i][j];
                if (this.ctx){
                    this.ctx.fillStyle = `rgb(${cell[0]*155}, ${cell[1]*255}, ${cell[2]*255})`;
                    this.ctx.fillRect(i * this.offsetX, j * this.offsetY, this.offsetX, this.offsetY);
                }
            }
        }
    }
}

function createCell() {
    const r = 0;
    const g = 0;
    const b = 0;
    if (Math.random() < 0.001) {
        return [r, 255, b, 1];
    }
    const a = Math.random();
    return [r, g, b, a];
}




export default CA_CONTROLLER;