import { Layout } from "antd";
import HeaderContent from "../HeaderContent";

const { Header } = Layout;

const LayoutHeader: React.FC = () => {
  return (
    <Header className="layout-header">
      <HeaderContent />
    </Header>
  );
};

export default LayoutHeader;
