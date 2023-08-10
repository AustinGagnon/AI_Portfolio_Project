import { useEffect, useState } from 'react';
import MazeLib from './MazeLib'
import './MazeStyle.css';

const Maze: React.FC = () => {
    const mazeSize = 15;
    const [maze, setMaze] = useState<number[][]>([]);

    useEffect(() => {
        const maze = new MazeLib(mazeSize, mazeSize);
        maze.drawMaze();
        setMaze(maze.getMaze());
        console.log(maze);
    }, [mazeSize])


    return (
        <div className='maze_container'>
            {maze.map((row, i) => (
                (
                    <div key={i}>
                        {row.map((cell, j) => {
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

