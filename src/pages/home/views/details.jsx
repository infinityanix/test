import React from "react";
import { Card } from "react-bootstrap";
import Image1 from "../../../static/image 1.jpg";
import "../styles/details.css";

export default function Box(props) {
  return (
    <>
      <div>
        <Card className="box">
          <div>
            <p class="display-4 text-center mt-5 mb-4">Feature</p>
          </div>
          <div data-test="container" class="container-fluid">
            <div data-test="row" class="row flex-center mb-5">
              <div class="col-sm-5 flex-center">
                <img src={Image1} alt="_image_" class="img-fluid" width="50%" />
              </div>
              <div class="col-sm-4 text-center">
                <h3>details1</h3>
                <h5>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam,
                </h5>
              </div>
            </div>
            <div data-test="row" class="row flex-center mt-5 mb-5">
              <div class="col-sm-5 order-sm-12 flex-center">
                <img src={Image1} alt="_image_" class="img-fluid" width="50%" />
              </div>
              <div class="col-sm-4 order-sm-1 text-center">
                <h3>details2</h3>
                <h5>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam,
                </h5>
              </div>
            </div>
            <div data-test="row" class="row flex-center mt-5 mb-5">
              <div class="col-sm-5 flex-center">
                <img src={Image1} alt="_image_" class="img-fluid" width="50%" />
              </div>
              <div class="col-sm-4 text-center">
                <h3>details3</h3>
                <h5>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam,
                </h5>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
