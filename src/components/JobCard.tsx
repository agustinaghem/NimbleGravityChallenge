import { useState } from 'react';
import { onApply } from '../services/postulation/onApply';
import type { JobCardProps } from '../types/jobCardProps';

export const JobCard = ({ job, applicationId,candidateUuid, candidateId }: JobCardProps) => {
    const [repoUrl, setRepoUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    return (
        <article className="job-card">
            <h3>{job.title}</h3>
            <input
                className="job-card-input"
                type="url"
                placeholder="URL del repositorio GitHub"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                aria-label="URL del repositorio GitHub"
            />
            <button
                type="button"
                className="job-card-btn"
                disabled={isSubmitting}
                onClick={() => {
                    setIsSubmitting(true);
                    onApply(job.id, repoUrl, applicationId, candidateUuid, candidateId)
                        .finally(() => setIsSubmitting(false));
                }}
            >
                {isSubmitting ? 'Enviando…' : 'Enviar postulación'}
            </button>
        </article>
    );
};