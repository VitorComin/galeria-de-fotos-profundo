import { Space } from "antd";
import { IListLayout } from "../../types/GeneralTypes";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import AddressListLayout from "../AddressListLayout";

const ListLayout: React.FC<IListLayout> = ({ addressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space style={{ width: "100%" }}>
      <AddressListLayout addressesList={addressesList} />
    </Space>
  );
};

export default ListLayout;
