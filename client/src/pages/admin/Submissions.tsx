import React, { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  Download,
  Filter,
  MoreHorizontal,
  Search
} from "lucide-react";
import { formatDate } from "@/lib/utils";

const PAGE_SIZE = 10;

const Submissions: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState<string | null>(null);
  
  const { data: submissions = [], isLoading } = useQuery<any[]>({
    queryKey: ['/api/submissions'],
  });

  const filteredSubmissions = React.useMemo(() => {
    if (!submissions) return [];
    
    let filtered = [...submissions];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((sub: any) => 
        `${sub.firstName} ${sub.lastName}`.toLowerCase().includes(term) ||
        sub.email.toLowerCase().includes(term) ||
        (sub.organization && sub.organization.toLowerCase().includes(term))
      );
    }
    
    // Apply category filter
    if (filterBy) {
      filtered = filtered.filter((sub: any) => sub.interest === filterBy);
    }
    
    return filtered;
  }, [submissions, searchTerm, filterBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredSubmissions.length / PAGE_SIZE);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * PAGE_SIZE, 
    currentPage * PAGE_SIZE
  );

  // Handle pagination
  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  // Export to CSV
  const exportToCSV = () => {
    if (!filteredSubmissions.length) return;
    
    const headers = ["First Name", "Last Name", "Email", "Phone", "Organization", "Position", "Interest", "Message", "Date"];
    
    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((sub: any) => [
        `"${sub.firstName}"`,
        `"${sub.lastName}"`,
        `"${sub.email}"`,
        `"${sub.phone || ''}"`,
        `"${sub.organization || ''}"`,
        `"${sub.position || ''}"`,
        `"${sub.interest}"`,
        `"${sub.message?.replace(/"/g, '""') || ''}"`,
        `"${formatDate(new Date(sub.createdAt))}"`
      ].join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `bestcare_submissions_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Contact Form Submissions</h1>
            <div className="space-x-2">
              <Link href="/admin">
                <Button variant="outline" className="text-white border-white hover:bg-primary-dark">
                  Dashboard
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="text-white border-white hover:bg-primary-dark">
                  Back to Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search submissions..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by Interest</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setFilterBy(null)}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterBy("motus-hand")}>
                    The Motus Hand
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterBy("motus-foot")}>
                    The Motus Foot
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterBy("both-products")}>
                    Both Products
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterBy("pricing")}>
                    Pricing Information
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterBy("demo")}>
                    Product Demonstration
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterBy("other")}>
                    Other
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant="outline" 
                className="flex items-center gap-1"
                onClick={exportToCSV}
                disabled={!filteredSubmissions.length}
              >
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
          </div>
          
          {filterBy && (
            <div className="mb-4">
              <Badge className="bg-primary" onClick={() => setFilterBy(null)}>
                {filterBy} ×
              </Badge>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : paginatedSubmissions.length > 0 ? (
            <>
              <div className="rounded-md border overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedSubmissions.map((submission: any) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">
                          {submission.firstName} {submission.lastName}
                        </TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.interest}</TableCell>
                        <TableCell>{submission.organization || "-"}</TableCell>
                        <TableCell>{submission.position || "-"}</TableCell>
                        <TableCell>{formatDate(new Date(submission.createdAt))}</TableCell>
                        <TableCell>
                          <div className="flex gap-1 flex-wrap">
                            {submission.notified && (
                              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                                Email Sent
                              </Badge>
                            )}
                            {submission.sheetSynced && (
                              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                                Synced
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Send Email</DropdownMenuItem>
                              <DropdownMenuItem>Resync to Sheets</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination controls */}
              <div className="flex items-center justify-between py-4">
                <div className="text-sm text-gray-500">
                  Showing {(currentPage - 1) * PAGE_SIZE + 1} to {Math.min(currentPage * PAGE_SIZE, filteredSubmissions.length)} of {filteredSubmissions.length} entries
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="flex items-center text-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {searchTerm || filterBy ? "No matching submissions found." : "No submissions yet."}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Submissions;
