import { Space } from "antd";
import AddressesList from "../AddressesList";

const ListLayout: React.FC = () => {
  return (
    <Space style={{ width: "100%" }}>
      <AddressesList />
    </Space>
  );
};

export default ListLayout;
