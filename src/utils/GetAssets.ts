import JavaScript_Maze1 from '../assets/ProjectAssets/JavaScript/JavaScript_Maze1.png';
import JavaScript_Maze2 from '../assets/ProjectAssets/JavaScript/JavaScript - Maze2_1.png';
import JavaScript_Maze3 from '../assets/ProjectAssets/JavaScript/JavaScript - Maze2_2.png';

import JavaScript_LavaLamp from '../assets/ProjectAssets/JavaScript/LavaLamp3.png';
import JavaScript_LavaLamp2 from '../assets/ProjectAssets/JavaScript/LavaLamp4.png';
import JavaScript_LavaLamp3 from '../assets/ProjectAssets/JavaScript/LavaLamp2.png';
import JavaScript_LavaLamp4 from '../assets/ProjectAssets/JavaScript/LavaLamp1.png';

import JavaScript_Lightning1 from '../assets/ProjectAssets/JavaScript/Lightning1.png';
import JavaScript_Lightning2 from '../assets/ProjectAssets/JavaScript/Lightning2.png';
import JavaScript_Lightning3 from '../assets/ProjectAssets/JavaScript/Lightning3.png';

import Python_MNIST from '../assets/ProjectAssets/Python/Python_MNIST.png';

export const getAsset = (assetName: string) => {
    switch (assetName) {
        case 'JavaScript_Maze1':
            return JavaScript_Maze1;
        case 'JavaScript_Maze2':
            return JavaScript_Maze2;
        case 'JavaScript_Maze3':
            return JavaScript_Maze3;

        case 'JavaScript_Lightning1':
            return JavaScript_Lightning1;
        case 'JavaScript_Lightning2':
            return JavaScript_Lightning2;
        case 'JavaScript_Lightning3':
            return JavaScript_Lightning3;

        case 'JavaScript_LavaLamp':
            return JavaScript_LavaLamp;
        case 'JavaScript_LavaLamp2':
            return JavaScript_LavaLamp2;
        case 'JavaScript_LavaLamp3':
            return JavaScript_LavaLamp3;
        case 'JavaScript_LavaLamp4':
            return JavaScript_LavaLamp4;
        case 'Python_MNIST':
            return Python_MNIST;

        case 'Github_ICON':
            return Github_ICON;
        default:
            return null;
    }
}