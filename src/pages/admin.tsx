import AdminSection from "@/components/AdminSection";
import Title from "@/components/Content/Title";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {};

const AdminPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className="pt-44"></div>
      <section className="flex items-center justify-center">
        <Title title="Registrerade" />
        <AdminSection />
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
