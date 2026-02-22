import type { Postulation } from "../../types/postulation";
import { postPostulation } from "./postPostulation";

export const onApply = async (jobId: string, repoUrl: string, applicationId: string, candidateUuid: string, candidateId: string): Promise<{ ok: boolean }> => {
    try{
        const postulation: Postulation = {
            uuid: candidateUuid,
            jobId: jobId,
            candidateId: candidateId,
            repoUrl: repoUrl,
            applicationId: applicationId,
        };

        const response = await postPostulation(postulation);

        return response;
    } catch (error) {
        console.error('Error in onApply:', error);
        throw error;
    }
};