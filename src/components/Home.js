import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommended from "./Recommended";
import NewToDisney from "./NewToDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { db } from "../firebaseAuth";
import { setMovies } from "../features/movie/moviesSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommended = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        const data = doc.data();
        switch (data.type) {
          case "recommend":
            recommended = [...recommended, { id: doc.id, ...data }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...data }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...data }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...data }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommended: recommended,
          newDisney: newDisney,
          original: original,
          trending: trending,
        })
      );
    });
  }, [username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommended />
      <NewToDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
