/* eslint-disable @next/next/no-img-element */
import { Carousel, Card } from "antd";
import Link from "next/link";
import React from "react";

const contentStyle = {
  position: "relative",
  height: "400px",
  color: "#fff",
  textAlign: "center",
  borderRadius: "8px",
  overflow: "hidden",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
};

const BannerComponent = ({ products }) => {
  return (
    <Carousel autoplay>
      {products?.map((product) => (
        <div key={product?._id}>
          <Link href={`/parts/${product?._id}`} className="hover:cursor-pointer">
            <Card bordered={false} style={contentStyle}>
              <img
                src={product?.image}
                alt={product?.productName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div style={overlayStyle}>
                <h3 style={{ color: "#fff", fontSize: "30px" }}>
                  {product?.productName}
                </h3>
                <p style={{ color: "#fff", fontSize: "26px" }}>
                  {product?.description}
                </p>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerComponent;
