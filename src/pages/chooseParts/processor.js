/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/Component/Layout/RootLayout";
import { setProcessor } from "@/redux/features/parts/partsSlice";
import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const ChooseProcessorPage = ({ processor }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-xl sm:text-4xl flex justify-center items-center py-6">
        All Processor
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
        {processor?.map((product) => (
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
                  <Image
                  alt="example"
                  src={
                    product?.image ||
                    "https://e7.pngegg.com/pngimages/473/579/png-clipart-computer-cases-housings-microatx-personal-computer-corsair-components-pc-case-electronic-device-power-converters.png"
                  }
                  width={200}
                  height={200}
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
                    onClick={() => dispatch(setProcessor(product))}
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

export default ChooseProcessorPage;
ChooseProcessorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://pc-builder-alpha.vercel.app/parts/filter?category=processor"
  );
  const processor = await res.json();

  return { props: { processor } };
}
