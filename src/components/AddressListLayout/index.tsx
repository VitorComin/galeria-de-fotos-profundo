import { Space } from "antd";
import React from "react";
import AddressesList from "../AddressesList";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const AddressListLayout: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space style={{ width: "100%" }}>
      <AddressesList />
    </Space>
  );
};

export default AddressListLayout;
