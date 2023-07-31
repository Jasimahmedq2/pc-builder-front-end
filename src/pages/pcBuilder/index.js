import RootLayout from "@/Component/Layout/RootLayout";
import ComponentCard from "@/Component/UI/ComponentCard";
import {
  removeMonitor,
  removeMotherboard,
  removePowerSupply,
  removeProcessor,
  removeRam,
  removeStorage,
} from "@/redux/features/parts/partsSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PcBuilderPage = () => {
  const { motherboard, monitor, processor, ram, storage, powerSupply } =
    useSelector((state) => state.parts);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Select PC Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ComponentCard
          category="CPU / Processor"
          ChooseNavigate="processor"
          product={processor}
          removeAction={removeProcessor}
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmF1lc76niNOsdscEDNIXLlqTWpJTjYi4pjGnHikbxg&s"
        />
        <ComponentCard
          category="Motherboard"
          ChooseNavigate="motherboard"
          product={motherboard}
          removeAction={removeMotherboard}
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FWYfbW85tV-bfwTbOXzz2NY-_SJ4VVBgWXa8F41x&s" // Replace with the actual image URL for Motherboard
        />
        <ComponentCard
          category="RAM"
          ChooseNavigate="ram"
          product={ram}
          removeAction={removeRam}
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9q-OxeMufp6ywGEXgZCNq156HTMT9aeSxhSq_M1m&s" // Replace with the actual image URL for RAM
        />
        <ComponentCard
          category="Power Supply Unit"
          ChooseNavigate="powerSupply"
          product={powerSupply}
          removeAction={removePowerSupply}
          imageSrc="https://w7.pngwing.com/pngs/1010/184/png-transparent-power-supply-unit-power-converters-80-plus-atx-electric-power-computer-electronics-computer-electronic-device.png" // Replace with the actual image URL for Power Supply Unit
        />
        <ComponentCard
          category="Storage Device"
          ChooseNavigate="storage"
          product={storage}
          removeAction={removeStorage}
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiq7qeCXoQWOzVIztMwHflV1jz1yggEV5C23fHcvTk&s" // Replace with the actual image URL for Storage Device
        />
        <ComponentCard
          category="Monitor"
          ChooseNavigate="monitor"
          product={monitor}
          removeAction={removeMonitor}
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S374TSKvEdKgLST56leragFIux7eWjnBgVyyFDIi&s" // Replace with the actual image URL for Monitor
        />
      </div>
      {monitor && powerSupply && processor && ram && storage && motherboard && (
        <div className="flex justify-end pt-12">
          {" "}
          <button
            onClick={() => toast.success("yee, your pc is ready for build")}
            className="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            complete
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
