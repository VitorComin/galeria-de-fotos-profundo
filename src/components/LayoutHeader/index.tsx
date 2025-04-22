import { Layout } from "antd";
import { ILayoutHeader } from "../../types/GeneralTypes";
import HeaderContent from "../HeaderContent";

const { Header } = Layout;

const LayoutHeader: React.FC<ILayoutHeader> = ({ setAddressesList }) => {
  return (
    <Header className="layout-header">
      <HeaderContent setAddressesList={setAddressesList} />
    </Header>
  );
};

export default LayoutHeader;
