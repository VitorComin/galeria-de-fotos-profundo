import { Space } from "antd";
import React from "react";
import AddressesList from "../AddressesList";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import { IAddressListLayout } from "../../types/GeneralTypes";

const AddressListLayout: React.FC<IAddressListLayout> = ({ addressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space style={{ width: "100%" }}>
      <AddressesList addressesList={addressesList} />
    </Space>
  );
};

export default AddressListLayout;
