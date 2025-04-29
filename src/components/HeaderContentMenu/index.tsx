import { Space } from "antd";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const HeaderContentMenu: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space>
      <HeaderContentMenuOptions />
    </Space>
  );
};

export default HeaderContentMenu;
