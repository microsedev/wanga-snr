import Header from '../../components/Header';
import JobForm from '../../components/JobForm';

export default function CreateJobPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create a New Job Listing</h1>
        <JobForm />
      </div>
    </div>
  );
}