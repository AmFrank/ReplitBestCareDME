import React from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, CheckCircle, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/utils";

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  const { data: submissions, isLoading } = useQuery({
    queryKey: ['/api/submissions'],
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  // Statistics calculation
  const stats = React.useMemo(() => {
    if (!submissions) return { total: 0, notified: 0, synced: 0, recent: 0 };
    
    const total = submissions.length;
    const notified = submissions.filter((sub: any) => sub.notified).length;
    const synced = submissions.filter((sub: any) => sub.sheetSynced).length;
    
    // Count submissions from the last 24 hours
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    const recent = submissions.filter((sub: any) => 
      new Date(sub.createdAt) > oneDayAgo
    ).length;
    
    return { total, notified, synced, recent };
  }, [submissions]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Link href="/">
              <Button variant="outline" className="text-white border-white hover:bg-primary-dark">
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome, {user?.username}</h2>
          <p className="text-gray-600">
            Manage your contact form submissions and site settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-20" />
              ) : (
                <div className="text-2xl font-bold">{stats.total}</div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Email Notifications</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-20" />
              ) : (
                <div className="text-2xl font-bold">{stats.notified}</div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Synced to Sheets</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-20" />
              ) : (
                <div className="text-2xl font-bold">{stats.synced}</div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last 24 Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-20" />
              ) : (
                <div className="text-2xl font-bold">{stats.recent}</div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <Tabs defaultValue="recent">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Contact Form Submissions</h2>
              <TabsList>
                <TabsTrigger value="recent">Recent Submissions</TabsTrigger>
                <TabsTrigger value="all">All Submissions</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="recent">
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <Skeleton className="h-6 w-1/3 mb-2" />
                        <Skeleton className="h-4 w-1/2 mb-1" />
                        <Skeleton className="h-4 w-2/3" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : submissions && submissions.length > 0 ? (
                <div className="space-y-4">
                  {submissions.slice(0, 5).map((submission: any) => (
                    <Card key={submission.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">
                              {submission.firstName} {submission.lastName}
                            </h3>
                            <p className="text-sm text-gray-600">{submission.email}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Interest: {submission.interest}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-500">
                              {formatDate(new Date(submission.createdAt))}
                            </span>
                            <div className="flex mt-1 space-x-1">
                              {submission.notified && (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Email Sent</span>
                              )}
                              {submission.sheetSynced && (
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Synced</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="text-center mt-4">
                    <Link href="/admin/submissions">
                      <Button variant="outline">View All Submissions</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="text-center py-6 text-gray-500">No submissions yet.</p>
              )}
            </TabsContent>

            <TabsContent value="all">
              <div className="text-center py-6">
                <Link href="/admin/submissions">
                  <Button>View All Submissions</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
