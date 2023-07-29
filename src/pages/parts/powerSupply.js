import RootLayout from "@/Component/Layout/RootLayout";
import { Card, Col, Rate, Row } from "antd";
import Link from "next/link";
import React from "react";

const pcPartsData = [
  {
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
  },
  {
    _id: "2",
    productName: "CPU Processor Z",
    category: "Processors",
    status: "In Stock",
    price: 399.99,
    description: "A powerful CPU processor for multitasking and gaming.",
    keyFeatures: {
      brand: "Brand Y",
      model: "Model B",
      specification: "Intel Core i9-12900K",
      port: "LGA 1700",
      type: "CPU",
      resolution: "N/A",
      voltage: "1.25V",
    },
    individualRating: 4.9,
    averageRating: 4.8,
    reviews: [
      {
        username: "User4",
        rating: 5,
        comment: "Insane performance, especially in gaming.",
      },
      {
        username: "User5",
        rating: 5,
        comment: "Best CPU I've ever owned!",
      },
      {
        username: "User6",
        rating: 4,
        comment: "Great for demanding applications.",
      },
    ],
  },
  {
    _id: "3",
    productName: "RAM Kit Plus",
    category: "Memory",
    status: "In Stock",
    price: 149.99,
    description: "A high-speed RAM kit for seamless multitasking.",
    keyFeatures: {
      brand: "Brand Z",
      model: "Model C",
      specification: "DDR4 32GB (2 x 16GB) 3600MHz",
      port: "288-pin DIMM",
      type: "RAM",
      resolution: "N/A",
      voltage: "1.35V",
    },
    individualRating: 4.5,
    averageRating: 4.3,
    reviews: [
      {
        username: "User7",
        rating: 4,
        comment: "Fast and reliable RAM for my work tasks.",
      },
      {
        username: "User8",
        rating: 4,
        comment: "Good value for a 32GB kit.",
      },
      {
        username: "User9",
        rating: 5,
        comment: "Improved my PC's performance significantly.",
      },
    ],
  },
  {
    _id: "4",
    productName: "SSD Drive Ultra",
    category: "Storage",
    status: "In Stock",
    price: 249.99,
    description: "A lightning-fast SSD drive for quick data access.",
    keyFeatures: {
      brand: "Brand A",
      model: "Model D",
      specification: "1TB NVMe M.2",
      port: "M.2 2280",
      type: "SSD",
      resolution: "N/A",
      voltage: "N/A",
    },
    individualRating: 4.8,
    averageRating: 4.6,
    reviews: [
      {
        username: "User10",
        rating: 5,
        comment: "Boot times and file transfers are incredibly fast!",
      },
      {
        username: "User11",
        rating: 4,
        comment: "A solid and reliable SSD.",
      },
      {
        username: "User12",
        rating: 5,
        comment: "One of the best NVMe drives available.",
      },
    ],
  },
  {
    _id: "5",
    productName: "PC Case Deluxe",
    category: "Cases",
    status: "In Stock",
    price: 159.99,
    description: "A premium PC case with excellent airflow and aesthetics.",
    keyFeatures: {
      brand: "Brand B",
      model: "Model E",
      specification: "Mid Tower",
      port: "USB 3.0",
      type: "ATX Case",
      resolution: "N/A",
      voltage: "N/A",
    },
    individualRating: 4.7,
    averageRating: 4.4,
    reviews: [
      {
        username: "User13",
        rating: 5,
        comment: "This case keeps my components cool and looks stunning.",
      },
      {
        username: "User14",
        rating: 4,
        comment: "Easy to build in and has plenty of cable management options.",
      },
      {
        username: "User15",
        rating: 4,
        comment: "A premium case worth the investment.",
      },
    ],
  },
  {
    _id: "6",
    productName: "Power Supply Gold",
    category: "Power Supplies",
    status: "In Stock",
    price: 129.99,
    description:
      "A high-efficiency power supply for stable and reliable power delivery.",
    keyFeatures: {
      brand: "Brand C",
      model: "Model F",
      specification: "750W 80+ Gold",
      port: "ATX 12V",
      type: "Power Supply",
      resolution: "N/A",
      voltage: "100-240V",
    },
    individualRating: 4.6,
    averageRating: 4.5,
    reviews: [
      {
        username: "User16",
        rating: 5,
        comment: "A reliable PSU with low noise output.",
      },
      {
        username: "User17",
        rating: 4,
        comment: "Great value for a 750W 80+ Gold PSU.",
      },
      {
        username: "User18",
        rating: 5,
        comment: "Stable power delivery even under load.",
      },
    ],
  },
  // Add more PC parts here if needed
];

const PowerSupplyPage = () => {
  return (
    <>
      <h2 className="text-xl sm:text-4xl flex justify-center items-center py-6">
        All PowerSupply
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
        {pcPartsData.map((product) => (
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S374TSKvEdKgLST56leragFIux7eWjnBgVyyFDIi&s"
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
    </>
  );
};

export default PowerSupplyPage;
PowerSupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
