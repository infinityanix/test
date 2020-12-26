import React from "react";
import "../styles/footer.css";

export default function Footer(props) {
  return (
    <>
      <section id="footer">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.twitter.com">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.google.com">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>
                <u>
                  <a href="https://www.logiqbits.com/">logiqbits</a>
                </u>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                consequat lacus et ligula bibendum, eu scelerisque libero
                fringilla. Donec dapibus, urna nec sollicitudin dignissim, orci
                dui viverra nisl, ut efficitur velit augue at sem
              </p>
              <p class="h6">
                © All right Reversed.
                <a
                  class="text-green ml-2"
                  href="https://www.logiqbits.com"
                  target="_blank"
                >
                  logiqbits
                </a>
              </p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
