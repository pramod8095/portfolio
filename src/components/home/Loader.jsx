import React from "react";

const Loader = () => {
  return (
    <>
      <div id="preloader">
        <div id="container" className="container-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <div data-preloader-text="P" className="characters">
                P
              </div>
              <div data-preloader-text="R" className="characters">
                R
              </div>
              <div data-preloader-text="A" className="characters">
                A
              </div>
              <div data-preloader-text="M" className="characters">
                M
              </div>
              <div data-preloader-text="O" className="characters">
                O
              </div>
              <div data-preloader-text="D" className="characters">
                D
              </div>
              
            </div>
          </div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </div>
    </>
  );
};
export default Loader;
