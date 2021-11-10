import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../img/slider-1.jpg";
import slider2 from "../../img/slider-2.jpg";
import slider3 from "../../img/slider-3.jpg";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0, .4)" }}>
            <h5 className="h1 text-white">Explore the world with us!</h5>
            {/* <p>
              Not only the treatment but also the quality of our environment can
              boost you up to be get better faster.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0, .2)" }}>
            <h5 className="h1 text-white">Touch the Sky with us!</h5>
            {/* <p>
              Dont be worried about the technology is being used for you. We
              make sure these are the best of the best.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0, .2)" }}>
            <h5 className="h1 text-white">
              New life is the assets of our future{" "}
            </h5>
            {/* <p>We are here to bring your baby in the world without any pain.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
