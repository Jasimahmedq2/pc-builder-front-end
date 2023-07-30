/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Row, Col } from "antd";
const { Meta } = Card;
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import { Rate } from "antd";
import Link from "next/link";

const FeaturesProduct = ({ products }) => {
  return (
    <Row
      gutter={[
        {
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        },
        {
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        },
      ]}
    >
      {products?.map((product) => (
        <Col
          key={product._id}
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={8}
        >
          <Link href={`/parts/${product?._id}`}>
            <Card
              hoverable
              style={{
                minWidth: 240,
                maxWidth: 600,
              }}
              cover={
                <img
                  alt="example"
                  src={
                    product?.image ||
                    "https://e7.pngegg.com/pngimages/473/579/png-clipart-computer-cases-housings-microatx-personal-computer-corsair-components-pc-case-electronic-device-power-converters.png"
                  }
                />
              }
            >
              <div
                style={{
                  maxHeight: 200,
                }}
              >
                <h3>{product?.productName}</h3>
                <h4>{product?.category}</h4>
                <h4>
                  {product?.description.length > 30
                    ? product?.description.slice(0, 30) + "..."
                    : product?.description}
                </h4>
                <h4>${product?.price}</h4>
                <Rate
                  disabled
                  defaultValue={Number(product?.reviews[0]?.rating)}
                />
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default FeaturesProduct;
