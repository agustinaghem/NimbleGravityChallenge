import type { Postulation } from '../../types/postulation';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const postPostulation = async (postulation: Postulation): Promise<{ ok: boolean }> => {
    try {
        const response = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(postulation)
        })

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `Error: ${response.status} ${response.statusText}`);
        }

        return data;
    } catch (error) {
        console.error('Error posting postulation:', error);
        throw error;
    }
};