import React from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { Divider } from "antd";

const Modal = () => {
  return (
    <div className="z-50 flex justify-center items-center  bg-gray-800/50 absolute top-0 right-0 left-0 bottom-0">
      <div className="bg-white w-4/5 h-2/5 p-5 rounded">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <div className="border-2 border-pink-500 rounded h-5 w-5 flex justify-center items-center mr-2 ">
              <AiOutlinePlus className="text-pink-500 text-sm" />
            </div>
            <span className="font-bold"> Add new user</span>
          </div>
          <div className="text-gray-600 text-xl">
            <AiOutlineClose />
          </div>
          
        </div>
        <Divider/>
        <div className="bg-blue-50	 w-full flex p-5 rounded justify-between">
            <div>
              <h6 className="font-semibold mb-1">Email</h6>
              <p className="text-sm">Type this user's email to add and contact later.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-1">Jobtitle</h6>
              <p  className="text-sm">What's this new user's jobtitle?</p>
            </div>
            <div>
              <h6 className="font-semibold mb-1">Code</h6>
              <p  className="text-sm">Enter this user's code.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-1">Authorized Module</h6>
              <p  className="text-sm">Which Inframodern module this user's authorized to use?</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
