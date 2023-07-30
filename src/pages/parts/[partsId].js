/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/Component/Layout/RootLayout";
import { Card, Col, Rate, Row } from "antd";
import React from "react";

const PartsDetailsPage = ({ product }) => {
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
          src={
            product?.image ||
            "https://e7.pngegg.com/pngimages/473/579/png-clipart-computer-cases-housings-microatx-personal-computer-corsair-components-pc-case-electronic-device-power-converters.png"
          }
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

export async function getStaticPaths() {
  const res = await fetch("http://localhost:5000/parts");
  const productsData = await res.json();
  const paths = productsData?.map((product) => ({
    params: { partsId: product?._id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:5000/parts/${params.partsId}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
