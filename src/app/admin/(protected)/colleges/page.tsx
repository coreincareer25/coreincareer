
import { getColleges } from './actions';
import { CollegesTable } from './colleges-table';

export const revalidate = 0;

export default async function CollegesPage() {
  const colleges = await getColleges();

  return (
    <div>
      <CollegesTable colleges={colleges} />
    </div>
  );
}
