import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";
import "./Header.style";
const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div>
      <HeaderContainer>
        <MainHeader>Recipe App</MainHeader>
        <FormContainer onSubmit={handleSubmit}>
          <FoodInput
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button>SEARCH</Button>
          <Select
            name="mealType"
            id="mealType"
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            {mealType.map((meal, i) => (
              <option key={i} value={meal}>
                {meal}
              </option>
            ))}
          </Select>
        </FormContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
