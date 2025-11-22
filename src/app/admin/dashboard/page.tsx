import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BookCopy, Building, Award } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookCopy className="h-5 w-5 text-primary" />
              Manage Courses
            </CardTitle>
            <CardDescription>
              Add, edit, or delete courses from your website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Click here to manage your course catalog.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Manage Colleges
            </CardTitle>
            <CardDescription>
              Update the list of colleges and universities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Click here to manage your college database.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Manage Scholarships
            </CardTitle>
            <CardDescription>
              Add or update scholarship information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Click here to manage available scholarships.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}