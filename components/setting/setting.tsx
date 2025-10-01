'use client'
import { useState } from "react";
import { Trash2, AlertTriangle, User, Mail, Calendar, CheckCircle, XCircle } from "lucide-react";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DeleteAccount } from "@/actions/delete";
import { toast } from "sonner";


 type User = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string ;
    createdAt: string;
    updatedAt: string;
  };
export default function SettingsPage({user}: {user: User}) {
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  
  


   

  const handleDeleteAccount = async () => {
    if (confirmText !== "DELETE") {
      return;
    }

    setIsDeleting(true);

    const res = await DeleteAccount(user.id);
    if(res.success){
        toast.success(res.message)
    }else{
        toast.error(res.message)
    }
    
    // Simulate API call
    setTimeout(() => {
      alert("Account deletion initiated. You will be logged out shortly.");
      setIsDeleting(false);
      setConfirmText("");
    }, 2000);
  };

  const isDeleteEnabled = confirmText === "DELETE" && !isDeleting;

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account preferences and settings.
        </p>
      </div>

      <div className="space-y-6">
        {/* Account Section */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Manage your account settings and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Profile Picture and Basic Info */}
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={user.image || '/defaultimg.jpg'}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-border"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Name</span>
                  </div>
                  <p className="text-lg font-semibold truncate">{user.name}</p>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Email</span>
                  {user.emailVerified ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <p className="text-base">{user.email}</p>
                <p className="text-xs text-muted-foreground">
                  {user.emailVerified ? "Email verified" : "Email not verified"}
                </p>
              </div>

              {/* User ID */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">User ID</span>
                </div>
                <p className="text-sm font-mono bg-muted px-3 py-1 rounded border truncate">
                  {user.id}
                </p>
              </div>

              {/* Account Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Created</span>
                  </div>
                  <p className="text-sm">{user.createdAt}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Last Updated</span>
                  </div>
                  <p className="text-sm">{user.updatedAt}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Danger Zone
            </CardTitle>
            <CardDescription>
              Irreversible and destructive actions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Once you delete your account, there is no going back. Please be certain.
              </AlertDescription>
            </Alert>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full sm:w-auto">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription className="space-y-2">
                    <p>This action cannot be undone. This will permanently delete your account and remove all of your data from our servers.</p>
                    <p>Type <strong>DELETE</strong> below to confirm:</p>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                
                <div className="py-4">
                  <Input
                    placeholder="Type DELETE to confirm"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    className="w-full"
                  />
                </div>

                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setConfirmText("")}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteAccount}
                    disabled={!isDeleteEnabled}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    {isDeleting ? "Deleting..." : "Delete Account"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}