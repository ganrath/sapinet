import React from "react";
import { StoreProvider, StoreConsumer } from "../components/Store/index";

import Header from "../Components/header";

import Filter from "../components/List/Filter";
import ListDetails from "../components/List/ListDetails";
import "../style.css";
const Home = () => (
  <div>
    <StoreProvider>
      <Header />
      <div className="layout-plz">
        <Filter />
        <ListDetails />
      </div>
    </StoreProvider>
  </div>
);

export default Home;
