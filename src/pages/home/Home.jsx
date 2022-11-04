import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";
const Home = () => {
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const APP_ID = "29049fc1";
  const APP_KEY = "b08f66419d622c3d8ac59e087c138b8f";
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the form");
    }
  };
  console.log(recipes);
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The Food Can Not Be Found</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
