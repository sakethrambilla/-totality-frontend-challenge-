import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authOptions } from "@/lib/auth-options";
import { TUser } from "@/types";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import DeactivateUserButton from "./_components/deactivate-user-button";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("http:localhost:3000");
  }

  const user = session.user as TUser;

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24 lg:p-0">
      <Card className="flex w-full flex-col items-center justify-center rounded-3xl border-secondary py-8 shadow-xl dark:border-primary lg:w-2/3">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start justify-center gap-12 lg:flex-row">
            <div className="flex flex-col items-start justify-center gap-8 lg:w-2/3">
              <div className="flex flex-col items-start gap-2">
                <p>Legal Name</p>
                <p className="text-sm text-secondary dark:text-primary">
                  {" "}
                  {session?.user?.name}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p>Email Address</p>
                <p className="text-sm text-secondary dark:text-primary">
                  {" "}
                  {user.email}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p>Phone Number</p>
                <p className="w-4/5 text-sm text-secondary dark:text-primary">
                  {user.phoneNumber
                    ? user.phoneNumber
                    : "Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used."}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p>Government ID</p>
                <p className="w-4/5 text-sm text-secondary dark:text-primary">
                  {user.governmentId ? user.governmentId : "Not provided"}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p>Emergancy Contact</p>
                <p className="w-4/5 text-sm text-secondary dark:text-primary">
                  {user.emergencyNumber ? user.emergencyNumber : "Not Provided"}
                </p>
              </div>
              <DeactivateUserButton />
            </div>
            <div className="w-1/3">
              <Image
                src={user.image}
                alt="Profile Image"
                className="rounded-2xl"
                width={200}
                height={200}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
