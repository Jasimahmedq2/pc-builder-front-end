/* eslint-disable @next/next/no-img-element */
import { Card, Col, Rate } from "antd";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const ComponentCard = ({
  category,
  imageSrc,
  ChooseNavigate,
  product,
  removeAction,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="max-w-sm  rounded overflow-hidden shadow-lg m-4 bg-white flex justify-between">
        <img
          style={{
            maxHeight: 300,
            maxWidth: 200,
          }}
          src={imageSrc}
          alt={category}
        />
        <div className=" px-6 py-4">
          <div className="font-bold text-xl mb-2">{category}</div>
          {product ? (
            <button
              disabled={true}
              className="disabled font-bold py-2 px-4 rounded"
            >
              Selected
            </button>
          ) : (
            <Link href={`/chooseParts/${ChooseNavigate}`}>
              <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                choose
              </button>
            </Link>
          )}
        </div>
      </div>

      {product && (
        <>
          <div className="max-w-sm divide-slate-200  overflow-hidden shadow-lg m-4 mt-4 bg-white flex justify-between">
            <img
              style={{
                maxHeight: 300,
                maxWidth: 200,
              }}
              src={
                product?.image ||
                "https://e7.pngegg.com/pngimages/473/579/png-clipart-computer-cases-housings-microatx-personal-computer-corsair-components-pc-case-electronic-device-power-converters.png"
              }
              alt={category}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {product.productName}
              </div>
              <div className="font-bold text-xl mb-2">${product.price}</div>
              <div className="font-bold text-xl mb-2">
                <Rate disabled defaultValue={Number(product?.averageRating)} />
              </div>
              <button
                onClick={() => dispatch(removeAction())}
                className=" hover:cursor-pointer text-black font-bold py-2 px-4 rounded"
              >
                remove
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ComponentCard;
