import { useEffect, useState } from 'react';
import MazeLib from './MazeLib'
import './MazeStyle.css';

const Maze: React.FC = () => {
    const [maze] = useState<MazeLib>(new MazeLib(15, 15));
    const [array2D] = useState<number[][]>(maze.getMaze());
    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        maze.drawMaze();
    }, [maze]);


    return (
        <div className='maze_container'>
            {array2D.map((row, i) => (
                (
                    <div key={i}>
                        {row.map((cell, j) => {
                            console.log(cell);
                            return (
                                <div id={"cell_" + i + "_" + j} className={"maze_cell"} key={j}>
                                    
                                </div>
                            )
                        })}
                    </div>
                )
            ))}
        </div>
    );
}


export default Maze;

