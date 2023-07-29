import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Layout } from "antd";
import RootLayout from "@/Component/Layout/RootLayout";
import FeaturesProduct from "@/Component/UI/FeaturesProduct";
import { BsSdCard } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { GiProcessor } from "react-icons/gi";
import { GiComputerFan } from "react-icons/gi";
import { BsMotherboard } from "react-icons/bs";
import { MdOutlineStorage } from "react-icons/md";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#f2f4f8]">
      <div>
        <h2 className="text-2xl sm:text-4xl flex justify-center">
          Features Product
        </h2>
        <FeaturesProduct />
      </div>
      <div>
        <h2 className="text-2xl py-6 sm:text-4xl flex justify-center">
          Features Categories
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3  gap-2">
          <Link href="/parts/storage">
            <div className="flex hover:cursor-pointer flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-6xl text-blue-500 mb-4">
                <BsSdCard />
              </div>
              <div className="text-xl sm:text-4xl font-bold">Storage</div>
            </div>
          </Link>
          <Link href="/parts/monitor">
            <div className="flex hover:cursor-pointer flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-6xl text-blue-500 mb-4">
                <FiMonitor />
              </div>
              <div className="text-xl sm:text-4xl font-bold">Monitor</div>
            </div>
          </Link>
          <Link href="/parts/processor">
            <div className="flex hover:cursor-pointer flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-6xl text-blue-500 mb-4">
                <GiProcessor />
              </div>
              <div className="text-xl sm:text-4xl font-bold">Processor</div>
            </div>
          </Link>
          <Link href="/parts/powerSupply">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-6xl text-blue-500 mb-4">
                <GiComputerFan />
              </div>
              <div className="text-xl sm:text-4xl font-bold">Power Supply</div>
            </div>
          </Link>
          <Link href="/parts/ram">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-6xl text-blue-500 mb-4">
                <MdOutlineStorage />
              </div>
              <div className="text-xl sm:text-4xl font-bold">Ram</div>
            </div>
          </Link>
          <Link href="/parts/motherboard">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-6xl text-blue-500 mb-4">
                <BsMotherboard />
              </div>
              <div className="text-xl sm:text-4xl font-bold">Motherboard</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
