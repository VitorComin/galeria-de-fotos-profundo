import { Menu, Typography } from "antd";
import { menuItems } from "../../constants/menuItens";
import { Faker, base, pt_BR } from "@faker-js/faker";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const BrazilianFaker = new Faker({
  locale: [pt_BR, base],
});

const HeaderContentMenuOptions: React.FC = () => {
  const { setAddressesList } = useContext(GeneralContext);

  function changeAddressesListLength(length: number) {
    const newAddressesList = Array.from({ length: length }, () => ({
      street: BrazilianFaker.location.street(),
      city: BrazilianFaker.location.city(),
      state: BrazilianFaker.location.state(),
      zipCode: BrazilianFaker.location.zipCode(),
    }));

    setAddressesList(newAddressesList);
  }

  return (
    <Menu theme="dark" mode="horizontal" className="header-menu">
      {menuItems?.map((item) => (
        <Menu.Item
          key={item?.key}
          title={item?.label}
          onClick={() => changeAddressesListLength(item?.key)}
        >
          <Typography.Link>{item?.label}</Typography.Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HeaderContentMenuOptions;
