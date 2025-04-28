import { IContentPage } from "../../types/GeneralTypes";
import ContentLayout from "../../components/ContentLayout";
import { Layout } from "antd";

const { Content } = Layout;

const ContentPage: React.FC<IContentPage> = ({ addressesList }) => {
  return (
    <Content className="layout-content">
      <ContentLayout addressesList={addressesList} />
    </Content>
  );
};

export default ContentPage;
