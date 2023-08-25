// import Maze from './Maze/Maze'
// import { useState } from 'react'
import { useState, useEffect } from 'react'
import CA_CONTROLLER from './CA_ENV'
import './CA_Style.css'

const row = 150;
const width = 600;
const height = 600;
const id = "ca_env";
const activaiton = "none"

const CA_Component = () => {
    const [env] = useState(new CA_CONTROLLER(row, width, height, id, activaiton));
    const [filter, setLocalFilter] = useState([['-0.3', '0.5', '0.5'], ['-0.9', '1', '0.1'], ['0.9', '0.7', '-0.5']]);


    const play = () => {
        env.ca.stop();
        // env.setFilter(filter);
        env.resetCA();
        env.ca.initCanvas();
        env.ca.play();
    };

    const randomize = () => {
            env.ca.stop();
            const newFilter = env.getRandomFilter();
            env.setFilter([...newFilter.map((row: number[]) => row.map((col: number) => col.toString()))])
            setLocalFilter([...newFilter.map((row: number[]) => row.map((col: number) => col.toString()))]);
            env.resetCA();
            env.ca.initCanvas();
            env.ca.play();
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const value = e.target.value;
        const row = parseInt(id[0]);
        const col = parseInt(id[1]);
        const newFilter = [...filter];
        newFilter[row][col] = value;
        setLocalFilter(newFilter);
    };

    return (
        <div className='grid_container'>
            <h1>Cellular Automata</h1>
            <canvas id='ca_env'></canvas>
            <div className='control_interface'>
                <div className='filter_controls'>
                    <input type="text" id="00" onChange={handleFilterChange} value={filter[0][0]}/>
                    <input type="text" id="01" onChange={handleFilterChange} value={filter[0][1]}/>
                    <input type="text" id="02" onChange={handleFilterChange} value={filter[0][2]}/>
                    <input type="text" id="10" onChange={handleFilterChange} value={filter[1][0]}/>
                    <input type="text" id="11" onChange={handleFilterChange} value={filter[1][1]}/>
                    <input type="text" id="12" onChange={handleFilterChange} value={filter[1][2]}/>
                    <input type="text" id="20" onChange={handleFilterChange} value={filter[2][0]}/>
                    <input type="text" id="21" onChange={handleFilterChange} value={filter[2][1]}/>
                    <input type="text" id="22" onChange={handleFilterChange} value={filter[2][2]}/>
                </div>
                <div className="button_interface">
                    <button id='rndm_btn' onClick={randomize}>Randomize</button>
                    <button onClick={play}>Reset</button>
                </div>
                

            </div>
            <p><b>Epilepsy Warning: Flashing Lights </b></p>

            <p> This website contains visual effects that may include flashing lights and rapid visual changes. These effects can potentially trigger seizures or cause discomfort for individuals with photosensitive epilepsy.

                Viewer discretion is advised, especially for users who are sensitive to flashing lights. If you have a history of epilepsy or are prone to seizures, please refrain from using this website or consult with a medical professional before proceeding.

                By pressing "Randomize" or interacting with the content on this website, you acknowledge that you have read and understood this epilepsy warning and assume all associated risks. If you experience any discomfort, dizziness, or other adverse reactions while using this website, immediately stop and consult a medical professional.

                If you agree to proceed and are comfortable with the potential risks, you can press "Randomize" to access the content.</p>
        </div>
    );             
};


export default CA_Component;
