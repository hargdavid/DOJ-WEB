import { RegisterApi } from "@/api/form/register";
import AdminSection from "@/components/AdminSection";
import Title from "@/components/Content/Title";
import { RegisterFormDto } from "@/types/registerForm";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

type Props = {};

const AdminPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [registered, setRegistered] = useState<RegisterFormDto[]>([]);

  useEffect(() => {
    (async () => {
      setRegistered(await RegisterApi.getRegistered());
    })();
  }, []);

  return (
    <>
      <div className="pt-44"></div>
      <section className="flex items-center justify-center flex-col">
        <Title title="Registrerade" />
        <AdminSection />
        <ul className="flex flex-col">
          {registered.map((register, key) => (
            <li key={key}>{register.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default AdminPage;
