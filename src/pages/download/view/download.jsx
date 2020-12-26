import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../../components/Layout";
import "../style/download.css";
import Image from "../../../static/image 1.jpg";

export default function Download(props) {
  return (
    <>
      <Layout>
        <div>
          <Card>
            <div class="container">
              <img src={Image1} alt="Snow" />
              <button class="btn">Button</button>
            </div>
          </Card>
        </div>
      </Layout>
    </>
  );
}
