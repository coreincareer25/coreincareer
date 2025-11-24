
import { getScholarships } from './actions';
import { ScholarshipsTable } from './scholarships-table';

export const revalidate = 0;

export default async function ScholarshipsPage() {
  const scholarships = await getScholarships();

  return (
    <div>
      <ScholarshipsTable scholarships={scholarships} />
    </div>
  );
}
