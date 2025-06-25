import { Suspense } from "react";
import AdminPageWrapper from "@/components/admin/adminpagewrapper/AdminPageWrapper";

export default function AdminPageRoute() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AdminPageWrapper />
    </Suspense>
  );
}
