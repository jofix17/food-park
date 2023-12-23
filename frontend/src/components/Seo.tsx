import { Helmet } from "react-helmet-async";

const Seo = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Seo;
