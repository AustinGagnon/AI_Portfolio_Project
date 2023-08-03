import { Project } from './types';

interface ProjectsData {
    [key: string]: Project[];
}

export const languageDescriptions: ProjectsData = {
    Python: [{id: 1, description: 'When I first dipped my toes into Python, I was immediately struck by its simplicity and readability. '}],
    JavaScript: [{id: 2, description: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)'}],
    Java: [{id: 1, description: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.'}],
    'C#': [{id: 1, description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.'}],
    'Node.JS': [{id: 1, description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'}],
    Firebase: [{id: 1, description: 'Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.'}],
    '.NET Framework': [{id: 1, description: '.NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library called Framework Class Library and provides language interoperability across several programming languages.'}],
    Projects: [{id: 1, description: 'This is a collection of projects that I have worked on over the years. I have included a brief description of each project, as well as the languages and frameworks used to create them. I hope you enjoy looking through them as much as I enjoyed creating them!'}],
};

export const getLanguageDescription = (language: string) => {
    return allProjects[`${language}`] || [];
};


export const allProjects: ProjectsData = {
    PythonProjects: [
        { id: 1, description: 'When I first dipped my toes into Python, I was immediately struck by its simplicity and readability. '
        + 'Understanding data types, control flow, and functions laid the foundation for my journey.' 
            + " As I became more comfortable with Python's core syntax, I started exploring object-oriented programming (OOP). Classes, objects, inheritance, and polymorphism "
            + "opened up a whole new world of possibilities. Creating modular and reusable code became second nature, and I began designing more complex applications with ease."},
        { id: 2, title: 'Multilayered Perceptron', description: 'This is a Python project.' },
    ],

    JavaScriptProjects: [
        { id: 1, title: 'JavaScript', description: 'This is a JavaScript project.', images: ['https://www.w3schools.com/js/pic_bulboff.gif', 'https://www.w3schools.com/js/pic_bulbon.gif'] },
    ],

    JavaProjects: [
        { id: 1, title: 'Java', description: 'This is a Java project.' },
        { id: 2, title: 'Java', description: 'This is a Java project.' },
    ],

    'C#Projects': [
        { id: 1, title: 'C#', description: 'This is a C# project.' },
    ],

    'Node.JSProjects': [
        { id: 1, title: 'Node.JS', description: 'This is a Node.JS project.' },
        { id: 2, title: 'Node.JS', description: 'This is a Node.JS project.' },
        { id: 3, title: 'Node.JS', description: 'This is a Node.JS project.' },
        { id: 4, title: 'Node.JS', description: 'This is a Node.JS project.' },
    ],

    FirebaseProjects: [
        { id: 1, title: 'Firebase', description: 'This is a Firebase project.' },
    ],

    '.NET FrameworkProjects': [
        { id: 1, title: '.NET Framework', description: 'This is a .NET Framework project.' },
    ],
    ProjectsProjects: [
        { id: 1, title: 'My Journey into programming', description: 'This is a .NET Framework project.' },
    ],
};


export const getProjectsByLanguage = (language: string) => {
    return allProjects[`${language}Projects`] || [];
};