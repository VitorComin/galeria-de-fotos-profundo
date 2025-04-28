import { Layout } from "antd";
import ContentLayout from "../../components/ContentLayout";

const { Content } = Layout;

const ContentPage: React.FC = () => {
  return (
    <Content className="layout-content">
      <ContentLayout />
    </Content>
  );
};

export default ContentPage;
