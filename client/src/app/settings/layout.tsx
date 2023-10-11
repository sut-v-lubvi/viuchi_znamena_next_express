import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { Container, ContainerNaw } from "./style";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <ContainerNaw>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Добавить тест"
            icon={<AiOutlineFileAdd />}
            href="/settings/addTest"
          />
          <BottomNavigationAction
            label="Список тестов"
            icon={<BsCardChecklist />}
            href="/settings/listTests"
          />
          <BottomNavigationAction label="Пользователи" icon={<FiUsers />} />
        </BottomNavigation>
      </ContainerNaw>
      {children}
    </Container>
  );
}
