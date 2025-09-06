import type React from "react";
import { getUserData } from "../services/authService";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


export const UseProtection = ({children}:{children: React.ReactNode}) => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlerUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const userData = await getUserData(token);
        setRole(userData.role);
      } catch (error) {
        console.error("Error obteniendo datos del usuario:", error);
        setRole(null);
      } finally {
        setLoading(false);
      }
    };

    handlerUserData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (role !== "admin") return <Navigate to="/login" />;
  return <>{children}</>;
}