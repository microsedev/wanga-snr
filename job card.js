import Link from 'next/link';
import { format } from 'date-fns';

export default function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <p className="text-sm text-gray-500 mb-4">
        Posted: {format(new Date(job.postedDate), 'MMM dd, yyyy')}
      </p>
      <Link href={`/jobs/${job.id}`}>
        <a className="text-blue-500 hover:text-blue-700">View Details</a>
      </Link>
    </div>
  );
}