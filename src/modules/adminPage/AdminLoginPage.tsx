import Button from "@components/Button/Button";
import Flex from "@components/Flex";
import { ItemTitle } from "@components/Typography";
import { requestLogin } from "@lib/api/admin";
import { AppRoutes } from "@lib/configs/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

export const AdminLoginPath = "/login";

const Input = styled.input`
  border: none;
  background-color: transparent;
  font-size: 16px;
  padding: 8px;
  outline: none;
  border-bottom: 1px solid #888;
`;

export const AdminLoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const token = await requestLogin(login, password);
      localStorage.setItem("accessJihu", token);
      toast("✅ Вы успешно вошли!");
      navigate(AppRoutes.shop);
    } catch (error) {
      toast("❌ Не удалось войти!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex direction="column" gap="16px" align="center" justify="center">
      <ItemTitle>Страница входа в панель администратора</ItemTitle>
      <Input
        value={login}
        onChange={(val) => setLogin(val.target.value)}
        placeholder="Логин"
      />
      <Input
        value={password}
        onChange={(val) => setPassword(val.target.value)}
        placeholder="Пароль"
      />
      <Button
        padding="16px 48px"
        onClick={onSubmit}
        disabled={!(login && password) || isLoading}
      >
        Войти
      </Button>
    </Flex>
  );
};
