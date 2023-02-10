import React from "react";

//svg
import { ReactComponent as Tick } from "./../../../../assets/icons/svg/tick-square.svg";
import { ReactComponent as Close } from "./../../../../assets/icons/svg/x-square.svg";

//interface
interface RequestItemProps {
  index: number;
  data: {
    name: string;
    lastName: string;
    stNumber: number;
    enterDate: number;
  };
}

const RequestItem: React.FC<RequestItemProps> = ({ data, index }) => {
  return (
    <tr className="grid grid-cols-12 w-full">
      <td className="col-span-1">{index + 1}</td>
      <td className="col-span-2">{data.name}</td>
      <td className="col-span-2">{data.lastName}</td>
      <td className="col-span-2">{data.stNumber}</td>
      <td className="col-span-2">{data.enterDate}</td>
      <td className="col-span-2 flex items-center justify-evenly">
        <button className="w-10 text-green-700 hover:text-green-900 duration-200">
          <Tick />
        </button>
        <button className="w-10 text-red-700 hover:text-red-900 duration-200">
          <Close />
        </button>
      </td>
      <td className="col-span-1 text-[#D5A419]">جزئیات</td>
    </tr>
  );
};

export default RequestItem;
