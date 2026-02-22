import { useEffect, useState } from 'react';
import { getCandidate } from './services/candidates/getCandidate';
import { getJobs } from './services/jobs/getJobs';
import { JobCard } from './components/JobCard';
import type { Candidate } from './types/candidate';
import type { Job } from './types/job';

const candidateEmail = 'agusaghem@gmail.com';

function App() {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [jobs, setJobs] = useState<Job[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInitData = async () => {
      try {
        setLoading(true);
        const [candidateData, jobsData] = await Promise.all([
          getCandidate(candidateEmail),
          getJobs()
        ]);

        setCandidate(candidateData);
        setJobs(jobsData);
      } catch (error) {
        setError('Failed to load data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadInitData();
  }, []);

  if (loading) return <div className="loading">Cargando aplicación...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="page">
      <header className="page-header">
        <h1>Candidato: {candidate?.firstName} {candidate?.lastName}</h1>
      </header>

      <div className="jobs-grid">
        {jobs?.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            applicationId={candidate?.applicationId || ''}
            candidateUuid={candidate?.uuid || ''}
            candidateId={candidate?.candidateId || ''}
          />))}
      </div>
    </main>
  );
}

export default App
