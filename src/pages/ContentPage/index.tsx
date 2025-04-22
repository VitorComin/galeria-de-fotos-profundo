import { IContentPage } from "../../types/GeneralTypes";
import ContentLayout from "../../components/ContentLayout";

const ContentPage: React.FC<IContentPage> = ({ addressesList }) => {
  return <ContentLayout addressesList={addressesList} />;
};

export default ContentPage;
