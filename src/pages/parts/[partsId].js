import RootLayout from "@/Component/Layout/RootLayout";
import { Card, Col, Rate, Row } from "antd";
import React from "react";

const product = {
  _id: "1",
  productName: "Graphics Card XYZ",
  category: "Graphics Cards",
  status: "In Stock",
  price: 499.99,
  description: "A high-performance graphics card for gaming and rendering.",
  keyFeatures: {
    brand: "Brand X",
    model: "Model A",
    specification: "NVIDIA RTX 3080",
    port: "PCIe 4.0 x16",
    type: "Dedicated GPU",
    resolution: "4K",
    voltage: "12V",
  },
  individualRating: 4.7,
  averageRating: 4.5,
  reviews: [
    {
      username: "User1",
      rating: 5,
      comment: "Handles all my games at max settings flawlessly.",
    },
    {
      username: "User2",
      rating: 4,
      comment: "Great GPU, but a bit pricey.",
    },
    {
      username: "User3",
      rating: 5,
      comment: "The performance is outstanding!",
    },
  ],
};

const PartsDetailsPage = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12}>
        <img
          style={{
            width: "100%",
            maxWidth: 400,
            height: "auto",
            padding: 12,
          }}
          alt="example"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S374TSKvEdKgLST56leragFIux7eWjnBgVyyFDIi&s"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Card
          title={product?.productName}
          bordered={false}
          style={{
            minWidth: 300,
            minHeight: "100vh", // This could cause issues on small screens, consider using 'auto' instead
          }}
        >
          <h5 className="text-xl w-full text-start">
            Category: {product?.category}
          </h5>
          <h5 className="text-xl w-full text-start">
            Description: {product?.description}
          </h5>
          <h5 className="text-xl w-full text-start">Price: {product?.price}</h5>
          <h5 className="text-xl w-full text-start">
            brand: {product?.keyFeatures?.brand}
          </h5>
          <h5 className="text-xl w-full text-start">
            model: {product?.keyFeatures?.model}
          </h5>
          <h5 className="text-xl w-full text-start">
            specification: {product?.keyFeatures?.specification}
          </h5>
          <h5 className="text-xl w-full text-start">
            individualRating:{" "}
            <Rate disabled defaultValue={Number(product?.individualRating)} />{" "}
          </h5>
          <h5 className="text-xl w-full text-start">
            averageRating:{" "}
            <Rate disabled defaultValue={Number(product?.averageRating)} />{" "}
          </h5>
        </Card>
      </Col>
    </Row>
  );
};

export default PartsDetailsPage;

PartsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
