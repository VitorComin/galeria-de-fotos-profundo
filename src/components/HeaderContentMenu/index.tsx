import { IHeaderContentMenu } from "../../types/GeneralTypes";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";
import { Space } from "antd";

const HeaderContentMenu: React.FC<IHeaderContentMenu> = ({
  setAddressesList,
}) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space>
      <HeaderContentMenuOptions setAddressesList={setAddressesList} />
    </Space>
  );
};

export default HeaderContentMenu;
