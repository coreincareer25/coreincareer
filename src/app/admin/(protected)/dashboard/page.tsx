import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, Admin!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is your admin dashboard. You can manage courses, colleges,
              and scholarships from the sidebar.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
