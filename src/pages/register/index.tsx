import RegisterForm from "@/components/RegisterForm";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { ContentPage } from "@/types/content/contentPage";
import ContentApi from "@/api/content/page";
import ContentProvider from "@/components/Content/ContentProvider";
import { RegisterFormProvider } from "@/hooks/RegisterProvider";

type Props = {};

const Register = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <RegisterForm />
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
