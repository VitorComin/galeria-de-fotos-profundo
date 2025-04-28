import { IHeaderContentMenu } from "../../types/GeneralTypes";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";
import { Space } from "antd";

const HeaderContentMenu: React.FC<IHeaderContentMenu> = ({
  setAddressesList,
}) => {
  return (
    <Space>
      <HeaderContentMenuOptions setAddressesList={setAddressesList} />
    </Space>
  );
};

export default HeaderContentMenu;
