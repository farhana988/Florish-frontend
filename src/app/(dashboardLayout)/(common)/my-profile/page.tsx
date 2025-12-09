/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Pencil, Settings } from "lucide-react";
import Image from "next/image";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const MyProfilePage = async () => {
  const userResponse = await getCurrentUser();
  const user = userResponse?.data;

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        No user found!
      </div>
    );
  }

  const roleBadgeVariant: Record<string, "user" | "admin" | "super_admin"> = {
    USER: "user",
    ADMIN: "admin",
    SUPER_ADMIN: "super_admin",
  };

  <Badge variant={roleBadgeVariant[user.role] || "default"}>{user.role}</Badge>;

  return (
    <>
      <ManagementPageHeader
        title="Profile"
        description="View and manage your personal information and addresses."
      />

      {/* Profile Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-5 relative">
          {" "}
          <Link href={"/change-password"}>
            <Button
              className="absolute top-3 right-3 z-10"
              size="sm"
              variant="outline"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </Link>
          <Card className="p-6 ">
            <div className="space-y-3 relative ">
              {/* Image Wrapper with Hover Button */}
              <Dialog>
                {/* IMAGE WITH HOVER OVERLAY */}
                <div className="relative w-fit group">
                  <Image
                    src={user.profilePhoto || "/defaultUser.png"}
                    alt="Profile Photo"
                    width={150}
                    height={150}
                    className="rounded-xl"
                  />

                  {/* Black Overlay */}
                  <div
                    className="absolute inset-0 rounded-xl bg-black/60 
                 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Center Circular Button — opens modal */}
                  <DialogTrigger asChild>
                    <button
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full
                     bg-white text-black flex items-center justify-center
                     z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                  </DialogTrigger>
                </div>

                {/* MODAL CONTENT */}
                <DialogContent className="max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Edit Profile Photo</DialogTitle>
                    <DialogDescription>
                      Upload a new profile picture.
                    </DialogDescription>
                  </DialogHeader>

                  {/* You can place upload input here */}
                  <div className="space-y-4 mt-4">
                    <input type="file" className="w-full border p-2 rounded" />

                    <button className="w-full bg-primary text-white py-2 rounded">
                      Upload
                    </button>
                  </div>
                </DialogContent>
              </Dialog>

              <h1 className="text-lg font-semibold wrap-break-word">
                {user.name}
              </h1>
              {user.addresses?.length > 0 && (
                <div>
                  {user.addresses.map((addr: any) => (
                    <p
                      key={addr.id}
                      className="opacity-80 text-sm flex gap-2 items-center"
                    >
                      <MapPin className="w-5 h-5 text-indigo-500 mt-1" />{" "}
                      {addr.street}, {addr.city}, {addr.country}
                    </p>
                  ))}
                </div>
              )}
              <Badge
                className="absolute top-28 left-28 z-10"
                variant={roleBadgeVariant[user.role] || "default"}
              >
                {user.role}
              </Badge>
            </div>
          </Card>
        </div>
        {/* info card */}
        <div className="col-span-7">
          {" "}
          <Card className="p-6 relative">
            <div className="flex-1 space-y-3 text-center md:text-start">
              {/* Name */}
              <p className="">
                <span className="font-semibold wrap-break-word">Name:</span>{" "}
                {user.name}
              </p>

              {/* Email */}
              <p className="">
                <span className="font-semibold">Email:</span> {user.email}
              </p>

              {/* Addresses */}
              {user.addresses?.length > 0 && (
                <div className="space-y-1">
                  {user.addresses.map((addr: any) => (
                    <p key={addr.id} className="">
                      <span className="font-semibold"> Address: </span>{" "}
                      {addr.street}, {addr.city}, {addr.country}
                    </p>
                  ))}
                </div>
              )}

              {/* Joined Date */}
              <p className="">
                <span className="font-semibold">Joined on: </span>
                {new Date(user.createdAt).toLocaleDateString()}
              </p>

              {/* Edit Button */}
              <Link href={"/update-profile"}>
                <Button
                  className="absolute top-3 right-3 z-10"
                  size="sm"
                  variant="outline"
                >
                  <Pencil className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default MyProfilePage;
