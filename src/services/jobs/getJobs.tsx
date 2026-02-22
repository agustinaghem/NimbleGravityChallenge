import type { Job } from '../../types/job';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getJobs = async (): Promise<Job[] | null> => {
    try{
        const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
        
        if(!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data: Job[] = await response.json();

        return data;
    } catch (error){
        console.error('Error fetching jobs:', error);
        throw error;
    }
};