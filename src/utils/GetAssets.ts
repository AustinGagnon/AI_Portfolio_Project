import JavaScript_Maze1 from '../assets/ProjectAssets/JavaScript_Maze1.png';
import JavaScript_LavaLamp from '../assets/ProjectAssets/JavaScript_LavaLamp.png';
import JavaScript_LavaLamp2 from '../assets/ProjectAssets/JavaScript_LavaLamp2.png';
import Python_MNIST from '../assets/ProjectAssets/Python_MNIST.png';

export const getAsset = (assetName: string) => {
    switch (assetName) {
        case 'JavaScript_Maze1':
            return JavaScript_Maze1;
        case 'JavaScript_LavaLamp':
            return JavaScript_LavaLamp;
        case 'JavaScript_LavaLamp2':
            return JavaScript_LavaLamp2;
        case 'Python_MNIST':
            return Python_MNIST;
        default:
            return null;
    }
}