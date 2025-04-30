import { IHeaderContentMenu } from "../../types/GeneralTypes";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import HeaderContentMenuBody from "../HeaderContentMenuBody";
import { Space } from "antd";

const HeaderContentMenu: React.FC<IHeaderContentMenu> = ({
  setAddressesList,
}) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space>
      <HeaderContentMenuBody setAddressesList={setAddressesList} />
    </Space>
  );
};

export default HeaderContentMenu;
