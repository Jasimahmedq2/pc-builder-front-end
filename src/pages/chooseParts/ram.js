/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/Component/Layout/RootLayout";
import { setRam } from "@/redux/features/parts/partsSlice";
import { Card, Col, Rate, Row } from "antd";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const ChooseRamPage = ({ ram }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-xl sm:text-4xl flex justify-center items-center py-6">
        All Ram
      </h2>
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
        {ram?.map((product) => (
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
                    defaultValue={Number(product?.averageRating)}
                  />
                </div>
                <Link href="/pcBuilder">
                  <button
                    onClick={() => dispatch(setRam(product))}
                    className="bg-blue-500 mt-2 hover:cursor-pointer hover:bg-blue-700 font-bold py-2 px-4 text-white rounded"
                  >
                    choose
                  </button>
                </Link>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ChooseRamPage;
ChooseRamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/parts/filter?category=ram");
  const ram = await res.json();

  return { props: { ram } };
}
