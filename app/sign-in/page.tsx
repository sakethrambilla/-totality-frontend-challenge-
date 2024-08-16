import SignInWithGoogle from "@/components/signin-with-google";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please SignIn to Continue</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInWithGoogle />
        </CardContent>
      </Card>
    </div>
  );
}
