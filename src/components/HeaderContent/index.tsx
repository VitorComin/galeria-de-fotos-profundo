import { Space, Typography } from "antd";
import { IHeaderContent } from "../../types/GeneralTypes";
import HeaderContentMenu from "../HeaderContentMenu";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const HeaderContent: React.FC<IHeaderContent> = ({ setAddressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <>
      <Space>
        <Typography.Title style={{ color: "white" }}>
          Lista de Endereços
        </Typography.Title>
      </Space>
      <HeaderContentMenu setAddressesList={setAddressesList} />
    </>
  );
};

export default HeaderContent;
