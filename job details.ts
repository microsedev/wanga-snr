import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getJobById } from '../../lib/api';
import Header from '../../components/Header';

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        setLoading(true);
        const data = await getJobById(id);
        setJob(data);
        setLoading(false);
      };
      fetchJob();
    }
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading job details...</div>;
  if (!job) return <div className="text-center py-8">Job not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-6">
          <span className="mr-4">{job.location}</span>
          <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
        </div>
        
        {job.salary && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="font-semibold text-lg mb-2">Salary</h2>
            <p>{job.salary}</p>
          </div>
        )}
        
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Job Description</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
        
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-700">Back to Jobs</a>
        </Link>
      </div>
    </div>
  );
}