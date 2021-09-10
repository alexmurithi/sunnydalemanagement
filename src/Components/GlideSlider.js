import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "../../src/Assets/css/slider.css";
import "../../src/Assets/css/glide.theme.css";
import PropTypes from "prop-types";
import { ArrowBackIos } from "@material-ui/icons";
import { ArrowForwardIos } from "@material-ui/icons";

// const renderDots = ({ children }) => {
//   console.log("dot children", children);
//   const total = React.Children.count(children);
//   const dots = [];
//   for (let i = 0; i < total; i += 1) {
//     dots.push(
//       <button className="glide__bullet" key={i} data-glide-dir={`=${i}`} />
//     );
//   }
//   return dots;
// };

const GlideSlider = ({ children, settings }) => {
  const slider = new Glide(".glide", { ...settings });

  useEffect(() => {
    slider.mount();
  });

  const renderDots = ({ children }) => {
    console.log("dot children", children);
    const total = React.Children.count(children);
    const dots = [];
    for (let i = 0; i < total; i += 1) {
      dots.push(
        <button className="glide__bullet" key={i} data-glide-dir={`=${i}`} />
      );
    }
    return dots;
  };
  return (
    <>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">{children}</div>

          <div className="glide__arrows slider-nav" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left left-arrow btn btn-link"
              data-glide-dir="<"
            >
              <ArrowBackIos />
            </button>
            <button
              className="glide__arrow glide__arrow--right right-arrow btn-link"
              data-glide-dir=">"
            >
              <ArrowForwardIos />
            </button>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {renderDots({ children })}
          </div>
        </div>
      </div>
    </>
  );
};

GlideSlider.propTypes = {
  children: PropTypes.node,
  settings: PropTypes.shape({
    gap: PropTypes.number,
    perView: PropTypes.number,
    carousel: PropTypes.string,
    startAt: PropTypes.number,
    rewind: PropTypes.bool,
  }),
};

export default React.memo(GlideSlider);
