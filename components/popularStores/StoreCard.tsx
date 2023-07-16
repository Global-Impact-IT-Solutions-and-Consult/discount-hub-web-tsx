// import Image from "next/image";

const StoreCard = ({ image, title }: any) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-[11rem] duration-300 ease-in h-48 mb-10 cursor-pointer text-gray-600 hover:text-green-400 hover:shadow-md">
        <div className="flex items-center justify-center p-4 bg-white rounded-t-md w-full h-2/3">
          {/* <Image src={image} height={80} width={150} alt="#" /> */}
          {image}
        </div>
        <div className="flex items-center justify-center font-sans text-sm w-full h-1/3 rounded-b-md bg-gray-200 shadow-md  py-2 px-4">
          {title}
        </div>
      </div>
    </>
  );
};

export default StoreCard;
