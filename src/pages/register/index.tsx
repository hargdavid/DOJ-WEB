import RegisterForm from "@/components/RegisterForm";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import { useState } from "react";
import SuccessSection from "@/components/SuccessSection";

type Props = {};

const Register = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <section>
      <Hero
        imageUrl="/assets/img/hero-example.jpeg"
        title={success ? t("register-success") : t("register")}
      />
      <Section>
        <p>{success ? t("register-success-text") : t("register-text")}</p>
      </Section>
      {success ? <SuccessSection /> : <RegisterForm setSuccess={setSuccess} />}
    </section>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default Register;
