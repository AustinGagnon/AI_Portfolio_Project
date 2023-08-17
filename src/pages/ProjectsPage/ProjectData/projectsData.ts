import { Project } from './types';

interface ProjectsData {
    [key: string]: Project[];
}

export const allProjects: ProjectsData = {



    JavaScript: [
        {   id: 1, 
            title: 'Maze Solver', 
            description: [  'When I need to explore a graph systematically and visit all nodes level by level, I opt for the Breadth-First Search (BFS) algorithm in JavaScript. I start by selecting a source node and enqueue it into a queue. Then, I dequeue the front node, visit it, and mark it as visited. Next, I enqueue all unvisited adjacent nodes of the current node into the queue. This process continues until the queue becomes empty, ensuring that I cover all reachable nodes from the source in a well-organized manner. I find BFS particularly useful for finding the shortest path in unweighted graphs and for solving graph-related problems. ',
                            'Whenever I want to traverse a graph deeply, exploring as far as possible along each branch before backtracking, I turn to the Depth-First Search (DFS) algorithm in JavaScript. Starting from the source node, I mark it as visited and then explore one of its unvisited adjacent nodes (usually the first one encountered). I then recursively apply DFS to that node, delving deeper into the graph until I reach a leaf node or a node with no unvisited neighbors. If there are still unvisited nodes, I backtrack to the last node with unexplored neighbors and repeat the process. DFS is particularly handy for tasks like finding connected components, topological sorting, and solving puzzles like mazes. ',],
            images: ['JavaScript_Maze1'],
            // year: 2019,
            githubURL: 'https://github.com/AustinGagnon/JavaScript_MazeSolver'},
        {
            id: 2,
            title: 'Lava Lamp',
            description: ['The "Lava Lamp" Isosurface project in JavaScript has been an exhilarating experience. Implementing a real-time 3D environment with WebGL was both challenging and rewarding, as it allowed me to push the boundaries of creative visualization. Leveraging the Marching Cubes algorithm to generate isosurfaces from volumetric data was a fascinating aspect of the project, transforming scalar values into fluid-like shapes that appear to flow and move dynamically. Adding user interactivity, such as customizable parameters for density, color, and flow speed, provided an engaging touch, allowing users to immerse themselves in the captivating lava lamp effect. Optimizing performance was another critical aspect, ensuring that the mesmerizing animations run smoothly even on less powerful devices. Overall, crafting the "Lava Lamp" Isosurface project has been an exploration of the possibilities offered by WebGL and a testament to the power of creative coding in delivering visually stunning and interactive experiences.'],
            images: ['JavaScript_LavaLamp', 'JavaScript_LavaLamp2', 'JavaScript_LavaLamp3', 'JavaScript_LavaLamp4'],
            // year: 2020,
            githubURL: 'https://github.com/AustinGagnon/JavaScript_Isosurface'},
        {
            id: 3,
            title: 'Lightning Simulator',
            description: ['The "Lightning Simulator" project in JavaScript was a fun and challenging experience. I started by creating a 2D canvas and drawing a simple background. I then added a lightning bolt object that consists of a series of line segments. I used a recursive algorithm to generate the lightning bolt, starting from the top of the canvas and working my way down. At each step, I randomly perturbed the line segment and split it into two smaller segments. I repeated this process until the line segment was too small to split. I then added a second lightning bolt object that follows the mouse cursor. I used a similar recursive algorithm to generate this lightning bolt, but I also added a random chance of splitting the line segment into two smaller segments. This resulted in a more natural-looking lightning bolt that follows the mouse cursor. Overall, the "Lightning Simulator" project was a great way to explore the possibilities of creative coding in JavaScript.'],
            images: ['JavaScript_Lightning2', 'JavaScript_Lightning3','JavaScript_Lightning1',],
            // year: 2021,
            githubURL: 'https://github.com/AustinGagnon/JavaScript_Lightning-Sim'},
    ],

    Python: [

        {
            id: 1,
            title: 'Multilayered Perceptron',
            description: ['This is a Python project.'],
            images: ['Python_MNIST']
        },
        {
            id: 2,
            title: 'FIU Senior Software Engineering - Bookstore API',
            description: [
                'Worked with a team of 5 to develop a RESTful API for a bookstore using the Flask REST Framework. '
                + 'I designed and implemented the user ratings and reviews feature, which allows users to rate and review books. '
                + 'We used the MVC design pattern to separate the business logic from the presentation layer. ' 
                + 'All data is stored in a postgreSQL database, and we used SQLAlchemy to interact with the database. '
                + 'We used Postman to test the API endpoints and ensure that the API is working as expected. ',
            ],
            images: ['BookStore_POST'],
            technologies: ['Python', 'Flask', 'Flask REST Framework', 'postgreSQL', 'SQLAlchemy', 'Postman', 'MVC design pattern'],


        }
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
            images: ['ChessBoard', 'ChessLaunch']
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