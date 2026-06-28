export type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: 'High' | 'Medium' | 'Low';
    category: string;
    startTime?: string;
    endTime?: string;
}

export type Category = {
    id: number;
    title: string;
}

export const priorityLabels = {
    en: { High: 'High', Medium: 'Medium', Low: 'Low' },
    fa: { High: 'بالا', Medium: 'متوسط', Low: 'پایین' }
};