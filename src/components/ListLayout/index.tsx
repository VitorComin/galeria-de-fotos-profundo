import { Space } from "antd";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import AddressListLayout from "../AddressListLayout";

const ListLayout: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space style={{ width: "100%" }}>
      <AddressListLayout />
    </Space>
  );
};

export default ListLayout;
