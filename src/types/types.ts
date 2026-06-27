export type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: 'High' | 'Medium' | 'Low';
    category: string;
    startTime?: number;
    endTime?: number;
}

export type Category = {
    id: number;
    title: string;
}