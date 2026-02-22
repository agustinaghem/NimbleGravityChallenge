import type { Job } from './job';

export interface JobCardProps {
  job: Job;
  applicationId: string;
  candidateUuid: string;
  candidateId: string;
}