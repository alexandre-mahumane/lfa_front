import { useState } from "react";
import { AdminNavbar } from "../components/navbar/adm-navbar";
import { AddTeamMemberForm } from "../components/form/sign-up";
import { AddNewsForm } from "../components/form/news";
import { EditProfileModal } from "../components/model";
import { AddAdminAndContactForm } from "../components/form";

export const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <div className="p-8 space-y-8">
        <AddAdminAndContactForm />
      </div>
    </div>
  );
};
