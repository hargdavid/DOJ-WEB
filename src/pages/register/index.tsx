import RegisterForm from "@/components/RegisterForm";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { RegisterPage } from "@/types/content/contentPage";
import ContentApi from "@/api/content/page";
import { RegisterFormProvider } from "@/hooks/RegisterProvider";
import ContentPageProvider from "@/components/Content/ContentPageProvider";
import SkeletonFiller from "@/components/Content/SkeletonFiller";

type Props = {
  content: RegisterPage;
};

const Register = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <RegisterFormProvider>
      {props.content ? (
        <ContentPageProvider contentPage={props.content} />
      ) : (
        <SkeletonFiller />
      )}
      <RegisterForm success={props.content?.success} />
    </RegisterFormProvider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const content = await ContentApi.getRegisterPage();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "sv", ["common"])),
      content,
    },
  };
};

export default Register;
