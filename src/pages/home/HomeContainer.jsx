import React from "react";
import Layout from "../../components/Layout";
import Box from "../home/views/details";
import Slider from "./views/Slider";
import Footer from "../home/views/footer";

export default function HomeContainer(props) {
  return (
    <Layout>
      <div>
        <Slider />
        <br></br>
        <Box />
        <br></br>
        <Footer />
      </div>
    </Layout>
  );
}
