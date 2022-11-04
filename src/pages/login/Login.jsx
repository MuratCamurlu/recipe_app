import {
  LoginContainer,
  FormContainer,
  StyledImg,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../components/context/LoginContext";

const Login = () => {
  const { user, setUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  console.log(user);
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<MÇ>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Enter Username"
            value={user?.userName || ""}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <StyledInput
            type="password"
            placeholder="Enter Password"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
