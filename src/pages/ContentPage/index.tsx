import { Layout } from "antd";
import ContentLayout from "../../components/ContentLayout";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const { Content } = Layout;

const ContentPage: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Content className="layout-content">
      <ContentLayout />
    </Content>
  );
};

export default ContentPage;
