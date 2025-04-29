import { IContentPage } from "../../types/GeneralTypes";
import ContentLayout from "../../components/ContentLayout";
import { Layout } from "antd";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const { Content } = Layout;

const ContentPage: React.FC<IContentPage> = ({ addressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Content className="layout-content">
      <ContentLayout addressesList={addressesList} />
    </Content>
  );
};

export default ContentPage;
