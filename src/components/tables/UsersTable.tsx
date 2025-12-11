/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import {
  blockUser,
  getAllUsers,
  makeAdmin,
} from "@/services/super-admin/super-admin-services";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

export default function UserTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await getAllUsers();
    if (res?.data) setUsers(res.data);
    else {
      showErrorToast("Failed to load users", res.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const load = async () => {
      await fetchUsers();
    };

    Promise.resolve().then(load); // FIX
  }, []);

  const handleMakeAdmin = async (id: string) => {
    const res = await makeAdmin(id);
    if (res?.success) {
      showSuccessToast("User promoted to admin!");
      fetchUsers();
    } else {
      showErrorToast("Failed to promote user", res.message);
    }
  };

  const handleBlockUser = async (id: string) => {
    const res = await blockUser(id);
    if (res?.success) {
      showSuccessToast("User blocked successfully!");
      fetchUsers();
    } else {
      showErrorToast("Failed to block user", res.message);
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-4">All Users</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users
            .filter((user) => user.role !== "SUPER_ADMIN")
            .map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.role === "ADMIN" ? (
                    <span className="text-green-600 font-semibold">Admin</span>
                  ) : (
                    "User"
                  )}
                </TableCell>
                <TableCell>
                  {user.isBlocked ? (
                    <span className="text-red-600 font-semibold">Blocked</span>
                  ) : (
                    "Active"
                  )}
                </TableCell>

                <TableCell className="text-right space-x-2">
                  {user.role !== "ADMIN" && (
                    <Button
                      size="sm"
                      onClick={() => handleMakeAdmin(user.id)}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Make Admin
                    </Button>
                  )}

                  {!user.isBlocked && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleBlockUser(user.id)}
                    >
                      Block
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
