import { Space } from "antd";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const HeaderContentMenuBody: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space style={{ display: "block" }}>
      <HeaderContentMenuOptions />
    </Space>
  );
};

export default HeaderContentMenuBody;
