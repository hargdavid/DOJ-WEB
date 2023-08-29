import RegisterForm from "@/components/RegisterForm";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {};

const Register = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <RegisterForm />;
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default Register;
