import { Layout } from "antd";
import HeaderContent from "../HeaderContent";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const { Header } = Layout;

const LayoutHeader: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Header className="layout-header">
      <HeaderContent />
    </Header>
  );
};

export default LayoutHeader;
