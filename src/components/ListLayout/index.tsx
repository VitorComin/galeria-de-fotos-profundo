import { Space } from "antd";
import { IListLayout } from "../../types/GeneralTypes";
import AddressesList from "../AddressesList";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const ListLayout: React.FC<IListLayout> = ({ addressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space style={{ width: "100%" }}>
      <AddressesList addressesList={addressesList} />
    </Space>
  );
};

export default ListLayout;
