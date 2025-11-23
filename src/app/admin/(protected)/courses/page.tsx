import { getCourses } from './actions';
import { CoursesTable } from './courses-table';

export const revalidate = 0;

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div>
      <CoursesTable courses={courses} />
    </div>
  );
}
