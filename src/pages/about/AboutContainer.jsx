import React from "react";
import { Card, Container } from "react-bootstrap";
import "../about/about.css";
import Layout from "../../components/Layout";
import Image1 from "../../static/image 1.jpg";

export default function AboutContainer(props) {
  return (
    <Layout>
      <div>
        <Card>
          <div class="container">
            <img src={Image1} alt="Notebook" style="width:100%;" />
            <div class="content">
              <h1>Heading</h1>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
