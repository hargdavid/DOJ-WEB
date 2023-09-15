import RegisterForm from "@/components/RegisterForm";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { RegisterPage } from "@/types/content/contentPage";
import ContentApi from "@/api/content/page";
import { RegisterFormProvider } from "@/hooks/RegisterProvider";
import ContentPageProvider from "@/components/Content/ContentPageProvider";

type Props = {};

const Register = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [content, setContent] = useState<RegisterPage>();

  useEffect(() => {
    (async () => {
      setContent(await ContentApi.getRegisterPage());
    })();
  }, []);

  return (
    <RegisterFormProvider>
      {content && <ContentPageProvider contentPage={content} />}
      <RegisterForm success={content?.success} />
    </RegisterFormProvider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "sv", ["common"])),
  },
});

export default Register;
