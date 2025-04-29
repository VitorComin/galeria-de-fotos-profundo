import { Layout } from "antd";
import { ILayoutHeader } from "../../types/GeneralTypes";
import HeaderContent from "../HeaderContent";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const { Header } = Layout;

const LayoutHeader: React.FC<ILayoutHeader> = ({ setAddressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Header className="layout-header">
      <HeaderContent setAddressesList={setAddressesList} />
    </Header>
  );
};

export default LayoutHeader;
