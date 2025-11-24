
'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import {
  deleteScholarship,
  createScholarship,
  updateScholarship,
} from './actions';
import { ScholarshipDialog } from './scholarship-dialog';

export type Scholarship = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  amount: string;
  image: string;
  aiHint?: string;
};

interface ScholarshipsTableProps {
  scholarships: Scholarship[];
}

export function ScholarshipsTable({ scholarships }: ScholarshipsTableProps) {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] =
    useState<Scholarship | null>(null);

  const handleEdit = (scholarship: Scholarship) => {
    setSelectedScholarship(scholarship);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setSelectedScholarship(null);
    setIsDialogOpen(true);
  };

  const handleDelete = (scholarship: Scholarship) => {
    setSelectedScholarship(scholarship);
    setIsAlertOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedScholarship) return;
    const result = await deleteScholarship(selectedScholarship.id);
    toast({
      title: result.success ? 'Success' : 'Error',
      description: result.message,
      variant: result.success ? 'default' : 'destructive',
    });
    setIsAlertOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Scholarships</h1>
        <Button onClick={handleAdd}>Add New Scholarship</Button>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="w-16">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scholarships.map((scholarship) => (
              <TableRow key={scholarship.id}>
                <TableCell>
                  <Image
                    src={scholarship.image}
                    alt={scholarship.title}
                    width={80}
                    height={45}
                    className="object-cover rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">{scholarship.title}</TableCell>
                <TableCell>{scholarship.amount}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(scholarship)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(scholarship)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {isDialogOpen && (
        <ScholarshipDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          scholarship={selectedScholarship}
          action={
            selectedScholarship
              ? updateScholarship.bind(null, selectedScholarship.id)
              : createScholarship
          }
        />
      )}

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              scholarship &ldquo;{selectedScholarship?.title}&rdquo;.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
