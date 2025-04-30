import { Space } from "antd";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const HeaderContentMenuBody: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space>
      <HeaderContentMenuOptions />
    </Space>
  );
};

export default HeaderContentMenuBody;
