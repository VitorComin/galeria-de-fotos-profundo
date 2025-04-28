import { Space } from "antd";
import { IListLayout } from "../../types/GeneralTypes";
import AddressesList from "../AddressesList";

const ListLayout: React.FC<IListLayout> = ({ addressesList }) => {
  return (
    <Space style={{ width: "100%" }}>
      <AddressesList addressesList={addressesList} />
    </Space>
  );
};

export default ListLayout;
