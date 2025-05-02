import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getJobs } from '../lib/api';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const data = await getJobs(currentPage);
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
      setLoading(false);
    };
    fetchJobs();
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4">
      <Header />
      <h1 className="text-3xl font-bold my-6">Job Listings</h1>
      
      <div className="mb-4">
        <Link href="/jobs/create">
          <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Post a Job
          </a>
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading jobs...</div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}