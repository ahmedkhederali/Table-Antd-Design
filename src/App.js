// import React from "react";
// import { BsFacebook, BsTwitter } from "react-icons/bs";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { AiFillFacebook } from "react-icons/ai";
// import { TiArrowSortedDown } from "react-icons/ti";
// export default function App() {
//   return (
//     // <div className="text-slate-400 ">
//     //   {/* header */}
//     //   <div className="bg-bg pb-40">
//     //     <div className="container py-5 flex justify-between items-center">
//     //       <div>
//     //         <h1 className="text-slate-800 font-bold text-3xl">
//     //           Social Media Dashboard
//     //         </h1>
//     //         <span className="text-sm">Total Followers : 12.455</span>
//     //       </div>
//     //       <div>
//     //         <label className="mr-2" htmlFor="checkbox">
//     //           Dark Mode
//     //         </label>
//     //         <span>
//     //           <input type="checkbox" id="checkbox" />
//     //         </span>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="container">
//     //     {/* main cards */}
//     //     <div className=" -mt-40 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-6 ">
//     //       {/*  card*/}
//     //       <div className="card before:bg-sky-500 ">
//     //         <div className="flex items-center justify-center gap-1 font-bold">
//     //           <span>
//     //             <BsTwitter className="text-blue-500" />
//     //           </span>
//     //           <span>@abcd</span>
//     //         </div>
//     //         <h2 className="text-slate-800 text-6xl">1987</h2>
//     //         <p className="font-medium uppercase tracking-[0.3 rem] ">
//     //           Followers
//     //         </p>
//     //         <div className="pt-6 flex items-center justify-center gap-1 ">
//     //           <span>
//     //             <MdKeyboardArrowUp />
//     //           </span>
//     //           <span>Today</span>
//     //         </div>
//     //       </div>
//     //       <div className="card before:bg-sky-900 ">
//     //         <div className="flex items-center justify-center gap-1 font-bold">
//     //           <span>
//     //             <AiFillFacebook className="text-blue-900" />
//     //           </span>
//     //           <span>@abcd</span>
//     //         </div>
//     //         <h2 className="text-slate-800 text-6xl">1987</h2>
//     //         <p className="font-medium uppercase tracking-[0.3 rem] ">
//     //           Followers
//     //         </p>
//     //         <div className="pt-6 flex items-center justify-center gap-1 ">
//     //           <span>
//     //             <MdKeyboardArrowUp />
//     //           </span>
//     //           <span>Today</span>
//     //         </div>
//     //       </div>
//     //       <div className="card before:bg-sky-500 ">
//     //         <div className="flex items-center justify-center gap-1 font-bold">
//     //           <span>
//     //             <BsTwitter className="text-blue-500" />
//     //           </span>
//     //           <span>@abcd</span>
//     //         </div>
//     //         <h2 className="text-slate-800 text-6xl">1987</h2>
//     //         <p className="font-medium uppercase tracking-[0.3 rem] ">
//     //           Followers
//     //         </p>
//     //         <div className="pt-6 flex items-center justify-center gap-1 ">
//     //           <span>
//     //             <MdKeyboardArrowUp />
//     //           </span>
//     //           <span>Today</span>
//     //         </div>
//     //       </div>
//     //       <div className="card before:bg-sky-900 ">
//     //         <div className="flex items-center justify-center gap-1 font-bold">
//     //           <span>
//     //             <AiFillFacebook className="text-blue-900" />
//     //           </span>
//     //           <span>@abcd</span>
//     //         </div>
//     //         <h2 className="text-slate-800 text-6xl">1987</h2>
//     //         <p className="font-medium uppercase tracking-[0.3 rem] ">
//     //           Followers
//     //         </p>
//     //         <div className="pt-6 flex items-center justify-center gap-1 ">
//     //           <span>
//     //             <MdKeyboardArrowUp />
//     //           </span>
//     //           <span>Today</span>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     {/*  */}
//     //     {/* sec cards */}
//     //     <div className=" mt-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 lg:gap-8">
//     //       <div className="sec-card ">
//     //         <div className="flex justify-between items-center">
//     //           <h3>Likes</h3>
//     //           <span>
//     //             <BsFacebook />{" "}
//     //           </span>
//     //         </div>
//     //         <div className="flex justify-between items-center mt-2">
//     //           <h3 className="text-4xl text-slate-900 font-bold">52</h3>
//     //           <div className="flex  items-center">
//     //             <span>
//     //               <TiArrowSortedDown />{" "}
//     //             </span>
//     //             <span>20505%</span>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="sec-card ">
//     //         <div className="flex justify-between items-center">
//     //           <h3>Likes</h3>
//     //           <span>
//     //             <BsFacebook />{" "}
//     //           </span>
//     //         </div>
//     //         <div className="flex justify-between items-center mt-2">
//     //           <h3 className="text-4xl text-slate-900 font-bold">52</h3>
//     //           <div className="flex  items-center">
//     //             <span>
//     //               <TiArrowSortedDown />{" "}
//     //             </span>
//     //             <span>20505%</span>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="sec-card ">
//     //         <div className="flex justify-between items-center">
//     //           <h3>Likes</h3>
//     //           <span>
//     //             <BsFacebook />{" "}
//     //           </span>
//     //         </div>
//     //         <div className="flex justify-between items-center mt-2">
//     //           <h3 className="text-4xl text-slate-900 font-bold">52</h3>
//     //           <div className="flex  items-center">
//     //             <span>
//     //               <TiArrowSortedDown />{" "}
//     //             </span>
//     //             <span>20505%</span>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="sec-card ">
//     //         <div className="flex justify-between items-center">
//     //           <h3>Likes</h3>
//     //           <span>
//     //             <BsFacebook />{" "}
//     //           </span>
//     //         </div>
//     //         <div className="flex justify-between items-center mt-2">
//     //           <h3 className="text-4xl text-slate-900 font-bold">52</h3>
//     //           <div className="flex  items-center">
//     //             <span>
//     //               <TiArrowSortedDown />{" "}
//     //             </span>
//     //             <span>20505%</span>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div>

//     </div>
//   );
// // }
// import React, { useState } from 'react';
// import { Button, Table,Pagination } from 'antd';
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
// ];
// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }
// const App = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const start = () => {
//     setLoading(true);
//     // ajax request after empty completing
//     setTimeout(() => {
//       setSelectedRowKeys([]);
//       setLoading(false);
//     }, 1000);
//   };
//   const onSelectChange = (newSelectedRowKeys) => {
//     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };
//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };
//   const hasSelected = selectedRowKeys.length > 0;
//   return (
//     <div>
//       <div
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
//           Reload
//         </Button>
//         <span
//           style={{
//             marginLeft: 8,
//           }}
//         >
//           {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
//         </span>
//       </div>
//       <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//     </div>
//   );
// };
// export default App;
import React from "react";
import Page from "./Components/Page/Page";

export default function App() {

  return (
    <div className="relative">
     
   <Page/>
    </div>
  );
}
