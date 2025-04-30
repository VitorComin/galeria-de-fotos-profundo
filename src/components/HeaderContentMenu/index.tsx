import { Space } from "antd";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import HeaderContentMenuBody from "../HeaderContentMenuBody";

const HeaderContentMenu: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space>
      <HeaderContentMenuBody />
    </Space>
  );
};

export default HeaderContentMenu;
