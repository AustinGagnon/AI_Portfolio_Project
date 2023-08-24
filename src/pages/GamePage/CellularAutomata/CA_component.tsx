// import Maze from './Maze/Maze'
// import { useState } from 'react'
// import { useEffect } from 'react'
import CA from './CA_ENV'
import './CA_Style.css'



const CA_Component = () => {
    const [row, width, height, id] = [100, 400, 400, "ca_env"];
    const env = new CA(row, width, height, id);

    // useEffect(() => {
    // }, []);

    return (
        <div className='grid_container'>
            <canvas id='ca_env'>{env.initCanvas()}</canvas>
        </div>
    );             
};


export default CA_Component;
