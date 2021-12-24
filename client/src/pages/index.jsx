import React from "react";
import "../styles/index.css";

const index = () => {
  return (
    <div>
      <header className="switcher-bar ssss clearfix">
        <div className="remove-btn header-btn pull-right">
          <a href="#" title="Close this bar" className="icon-remove" />
        </div>
        <div className="purchase-btn header-btn pull-right">
          <a href="#" title="Buy now" className="icon-shopping-cart" />
        </div>
        <div
          className="mobile-btn header-btn pull-right hidden-xs visible"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <a href="#" title="Smartphone View" className="icon-mobile-phone" />
        </div>
        <div
          className="tablet-btn header-btn pull-right hidden-xs visible"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <a href="#" title="Tablet View" className="icon-tablet" />
        </div>
        <div
          className="desktop-btn header-btn pull-right hidden-xs visible"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <a href="#" title="Desktop View" className="icon-desktop" />
        </div>
      </header>
      <section className="switcher-body">
        <a
          href="#"
          title="Prev"
          className="icon-chevron-left products-prev hidden disabled"
          style={{ display: "none" }}
        />
        <div className="products-wrapper">
          <div
            className="caroufredsel_wrapper"
            style={{
              display: "block",
              textAlign: "start",
              float: "none",
              position: "relative",
              inset: "auto",
              zIndex: "auto",
              width: 1342,
              height: 0,
              margin: 0,
              overflow: "hidden",
            }}
          >
            <div
              className="products-list clearfix"
              style={{
                textAlign: "left",
                float: "none",
                position: "absolute",
                inset: "0px auto auto 671px",
                margin: 0,
                width: 1342,
                height: 0,
              }}
            />
          </div>
        </div>
        <a
          href="#"
          title="Next"
          className="icon-chevron-right products-next hidden"
          style={{ display: "none" }}
        />
      </section>
      <iframe
        className="product-iframe"
        frameBorder={0}
        border={0}
        src="https://colorlib.com/preview/theme/finlone/"
        style={{ height: 900, width: 1872 }}
      />
    </div>
  );
};

export default index;
