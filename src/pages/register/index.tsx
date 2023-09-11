import RegisterForm from "@/components/RegisterForm";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import SuccessSection from "@/components/SuccessSection";
import { ContentPage } from "@/types/content/contentPage";
import ContentApi from "@/api/content/page";
import ContentProvider from "@/components/Content/ContentProvider";
import { RegisterFormProvider } from "@/hooks/RegisterProvider";

type Props = {};

const Register = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");
  const [success, setSuccess] = useState<boolean>(false);
  const [content, setContent] = useState<ContentPage>();

  useEffect(() => {
    (async () => {
      setContent(await ContentApi.getRegisterPage());
    })();
  }, []);

  return (
    <RegisterFormProvider>
      <section>
        {content && <ContentProvider contentPage={content} />}
        {success ? (
          <SuccessSection />
        ) : (
          <RegisterForm setSuccess={setSuccess} />
        )}
      </section>
    </RegisterFormProvider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default Register;
