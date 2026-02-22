import type { Candidate } from '../../types/candidate';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCandidate = async (email: string): Promise<Candidate | null> => {
    try {
        const response = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${email}`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data: Candidate = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching candidate:', error);
        throw error;
    }
};