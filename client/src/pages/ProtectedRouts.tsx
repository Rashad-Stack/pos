import { SESSION } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRouts() {
  const { data, loading } = useQuery(SESSION);

  const user = data?.session;

  return loading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-8 border-dashed border-indigo-400" />
    </div>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
