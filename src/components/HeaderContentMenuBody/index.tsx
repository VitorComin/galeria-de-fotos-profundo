import { Space } from "antd";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import { IHeaderContentMenuBody } from "../../types/GeneralTypes";

const HeaderContentMenuBody: React.FC<IHeaderContentMenuBody> = ({
  setAddressesList,
}) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space style={{ display: "block" }}>
      <HeaderContentMenuOptions setAddressesList={setAddressesList} />
    </Space>
  );
};

export default HeaderContentMenuBody;
