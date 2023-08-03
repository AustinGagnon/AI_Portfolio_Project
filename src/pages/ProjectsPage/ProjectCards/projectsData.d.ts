// projectsData.d.ts
declare module './projectsData' {
    export const allProjects: {
        pythonProjects: Project[];
        javascriptProjects: Project[];
        // ... Add other project arrays and their types
    };

    export interface Project {
        id: number;
        title: string;
        description: string;
        images?: string[];
    }

    export function getProjectsByLanguage(language: string): Project[];
}
