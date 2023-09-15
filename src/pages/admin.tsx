import { RegisterApi } from "@/api/form/register";
import AdminSection from "@/components/AdminSection";
import { useGlobalState } from "@/hooks/GlobalProvider";
import { RegisterFormDto } from "@/types/registerForm";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const AdminPage = () => {
  const { isLoggedIn } = useGlobalState();
  const [registered, setRegistered] = useState<RegisterFormDto[]>([]);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    setRegistered(await RegisterApi.getRegistered());
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/404");
    } else {
      fetchData();
    }
  }, [isLoggedIn, fetchData, router]);

  return <>{isLoggedIn && <AdminSection registered={registered} />}</>;
};

export default AdminPage;
