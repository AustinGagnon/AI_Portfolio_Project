import { Project } from './types';

interface ProjectsData {
    [key: string]: Project[];
}

export const allProjects: ProjectsData = {



    JavaScript: [
        {
            id: 1,
            title: 'Cellular Automata',
            description: [
                'A celular automata is a collection of cells on a grid that evolve through a series of discrete time steps. '
                 + 'Each cell has a state, and the state of a cell at the next time step is determined by a set of rules. '
                 + 'The rules are applied to each cell simultaneously, and the state of the grid evolves over time. '
                 + 'I created a cellular automata in TypeScript that can be run in the browser. '
                 + 'The cellular automata has a grid of cells that can be in one of range of states from 0 to 1, '
                 + 'where 0 is fully-off and 1 is fully-on. ' + 'The cellular automata has a variable filter property '
                 + 'that can be used to apply a filter to the grid. The filter is a 3x3 matrix of numbers that can be used to '
                 + 'apply a convolution filter to the grid. The cellular automata is influeced by the filter and starting location to '
                    + 'create a variety of interesting patterns. ',
            ],
            images: ['CA_1', 'CA_2', 'CA_3', 'CA_4'],
            githubURL: '/game',
        },
        {   id: 2, 
            title: 'Maze Solver', 
            description: [ 
                'For this project I wanted to create a program that could solve a maze, but also show you in real-time the path '
                + 'that it is taking to solve it. The first step was to create a maze generator that could generate '
                + 'a maze. Because this project was early in my programming journey, a completable maze was not always guaranteed '
                + 'for each generation. If I were to do this project again, I would use a map generation algorithm such '
                + 'wave function colapse so that a winnable map would be ensured each generation.',
                'The next step was to create the algorithms that would solve the maze. I created two algorithms, one that uses '
                + 'a depth-first search and one that uses a breadth-first search. The depth-first search algorithm is a recursive '
                + 'algorithm that explores the maze by going as deep as possible before backtracking. The breadth-first search '
                + 'algorithm explores the maze by exploring all possible paths at each step. While these algorithms are quite simple, '
                + 'they were a great way to learn about recursion and graph traversal algorithms. ',
            ],
            images: ['JavaScript_Maze1'],
            githubURL: 'https://github.com/AustinGagnon/JavaScript_MazeSolver'},
        {
            id: 3,
            title: 'Lava Lamp (Isosurface)',
            description: [
                'The Lava Lamp (Isosurface) simulation started as a libary for verlet integration where each particle in my '
                + '2D space could be bound to another particle by a connecting rod. The particles could rotate around each other '
                + 'however, the rods were fixed in length. I then added a temperature property to each particle that would cause '
                + 'the particles to heat up near the bottom and cool down near the top. A heated particle would gain a bouncy force '
                + 'that could counter act the force of gravity.',
                'The next step was to calculate the distance from each point in space to each particle. I used the summation of the '
                + 'light emmited by all particles to calculate the color of each pixel in the canvas. ' 
                + 'Now when two particles are close together, they will emit more light and the pixel will be brighter. ' 
                + 'Visually, this creates a glowing effect around the particles and the morphing and merging of lava bulbs. ',
            ],
            images: ['JavaScript_LavaLamp', 'JavaScript_LavaLamp2', 'JavaScript_LavaLamp3', 'JavaScript_LavaLamp4'],
            githubURL: 'https://github.com/AustinGagnon/JavaScript_Isosurface'},
        {
            id: 4,
            title: 'Lightning Simulator',
            description: [
                'The "Lightning Simulator" project in JavaScript was a fun and challenging experience. I started by creating a 2D '
                + 'canvas and drawing a simple background. I then added a lightning bolt object that consists of a series of line '
                + 'segments. I used a recursive algorithm to generate the lightning bolt, starting from the top of the canvas and '
                + 'working my way down. At each step, I randomly perturbed the line segment and split it into two smaller segments. '
                + 'I repeated this process until the line segment was too small to split. ',
                'The goal of each lightning bolt was to search for the bottom (ground) of the canvas. '
                + 'The first branch to "find" the bottom of the canvas ends the search, and the successful branch '
                + 'would eluminate brighter as the other branches would fade away. '
                + 'However, not all bolts would reach the bottom of the canvas. Some bolts would split too many times and '
                + 'the line segments would become too small to split. For these bolts, I allowed to them to fade away once '
                + 'they reached a certain length. ',
            ],
            images: ['JavaScript_Lightning2', 'JavaScript_Lightning3','JavaScript_Lightning1',],
            githubURL: 'https://github.com/AustinGagnon/JavaScript_Lightning-Sim'},
    ],

    Python: [
        {
            id: 1,
            title: 'FIU Senior Software Engineering - Bookstore API',
            description: [
                'Worked with a team of 5 to develop a RESTful API for a bookstore using the Flask REST Framework. '
                + 'I designed and implemented the user ratings and reviews feature, which allows users to rate and review books. '
                + 'We used the MVC design pattern to separate the business logic from the presentation layer. '
                + 'All data is stored in a postgreSQL database, and we used SQLAlchemy to interact with the database. '
                + 'We used Postman to test the API endpoints and ensure that the API is working as expected. ',
            ],
            images: ['BookStore_POST'],
            technologies: ['Python', 'Flask REST Framework', 'postgreSQL', 'SQLAlchemy', 'Postman', 'MVC design pattern'],
            githubURL: 'https://github.com/franscwa/BookstoreAPI',

        },
        {
            id: 2,
            title: 'Multilayered Perceptron',
            description: [
                'During my Data Mining course at Florida International University, we studied various neural network types, including the fundamental multilayered perceptrons. Seeking to expand my knowledge, I undertook the challenge of crafting a multilayer perceptron using Python and NumPy. This self-built model aimed to proficiently recognize handwritten digits, a task famously associated with the MNIST dataset. I successfully implemented both ReLU-activated forward propagation and gradient descent-based backward propagation. '
                + 'Utilizing the MNIST dataset for training and testing, the model achieved an impressive 97% accuracy on the test set, all achieved without the incorporation of convolutional layers.',
                "This practical undertaking significantly enhanced my comprehension of pivotal machine learning concepts, encompassing elements like weights, biases, activation functions that introduce non-linearity, and the indispensable impact of learning rate and epochs on the model's behavior."
            ],
            images: ['Python_MNIST'],
            githubURL: 'https://github.com/AustinGagnon',
        },
        
    ],

    Java: [
        {   id: 1, 
            title: 'Object Oriented Programming',
            description: ['Object Oriented Programming was one of the first programming courses I took at university. I remember spending the semester learning ' 
                        + 'the fundamentals of object-oriented programming (OOP) in Java. '
                        + 'I learned about classes, objects, inheritance, polymorphism, and more. And we built a few small projects along the way. ']

        }
    ],

    'C#': [
        {   id: 1, 
            title: 'Chess Game',
            description: ['As part of my Advanced Windows programming course, we developed a chess game in C# using the Windows Forms Framework. '
                            + 'The game features a fully functional chess board with all the rules of chess implemented. '
                            + 'The game features two-player gameplay, with mechanics such as piece movement, capturing, and checking implemented. '
                            + 'The game also features a timer that keeps track of the time each player has left. ',
                            'I learned a lot about the Windows Forms Framework and the C# programming language while working on this project such as '
                            + 'how to create a GUI, how to handle user input, and how to implement game logic. '
                            + 'I also learned about the Model-View-Controller (MVC) design pattern and how to apply it to my projects. '
                            + 'Overall, this project was a great way to learn about the Windows Forms Framework and the C# programming language. '

                        ],
            images: ['ChessBoard', 'ChessGame1','ChessLaunch'],
            githubURL: 'https://github.com/AustinGagnon/ChessGame',
        },
    ],

    'Node.JS': [
        {   id: 1, 
            title: 'More projects coming soon...',
        },
    ],

    Firebase: [
        {   id: 1, 
            title: 'More projects coming soon...' },
    ],

    '.NET Framework': [
        {   id: 1, 
            title: 'More projects coming soon...' },
    ],
};


export const getProjectsByLanguage = (language: string) => {
    return allProjects[`${language}`] || [];
};