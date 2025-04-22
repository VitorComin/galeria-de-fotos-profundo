import { Space, Typography } from "antd";
import { IHeaderContent } from "../../types/GeneralTypes";
import HeaderContentMenu from "../HeaderContentMenu";

const HeaderContent: React.FC<IHeaderContent> = ({ setAddressesList }) => {
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
