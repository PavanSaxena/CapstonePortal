import React, { useState, useEffect } from 'react';
import Tile from '../components/Tile';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import facultyData from "../assets/cleaned_updated_faculty_details.json";
const groupByDomain = (facultyList) => {
  const domainMap = {}
  facultyList.forEach((faculty)=>{
    Object.keys(faculty).forEach((key)=>{
      if(key.startsWith("Domain-") && faculty[key]){
        if(!domainMap[faculty[key]]){
          domainMap[faculty[key]] = []
        }
        domainMap[faculty[key]].push(faculty)
      }
    })
  })
  return domainMap
}
const Home = () => {
  const sortedFaculty = groupByDomain(facultyData);
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {Object.entries(sortedFaculty).map(([domain, facultyList]) => {
        return (<div key={domain} className="mb-10">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">{domain}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {facultyList.map((faculty, index) => (
              <Tile
                key={index}
                image={faculty["Image URL"]}
                name={faculty["Name"]}
                role={faculty["Designation"]}
                email={faculty["Email"]}
                slots={4}
              />
            ))}
          </div>
        </div>)
      })}
      <div className='flex w-full justify-center gap-2'>
        <button className='bg-blue-950 text-white text-2xl rounded-md p-2 disabled:opacity-50'><FaCaretLeft/></button>
        <button className='bg-blue-950 text-white text-2xl rounded-md p-2 disabled:opacity-50'><FaCaretRight/></button>
      </div>
    </div>
  );
};

export default Home;
// import React, { useState } from 'react';
// import Tile from '../components/Tile';
// import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
// import facultyData from "../assets/cleaned_updated_faculty_details.json";

// const groupByDomain = (facultyList) => {
//   const domainMap = {};
//   facultyList.forEach((faculty) => {
//     Object.keys(faculty).forEach((key) => {
//       if (key.startsWith("Domain-") && faculty[key]) {
//         if (!domainMap[faculty[key]]) {
//           domainMap[faculty[key]] = [];
//         }
//         domainMap[faculty[key]].push(faculty);
//       }
//     });
//   });
//   return domainMap;
// };

// const paginateFaculty = (sortedFaculty, currentPage, tilesPerPage) => {
//   let flatList = [];
//   Object.entries(sortedFaculty).forEach(([domain, facultyList]) => {
//     flatList.push({ type: "header", name: domain });
//     flatList = [...flatList, ...facultyList];
//   });

//   const startIdx = (currentPage - 1) * tilesPerPage;
//   const endIdx = startIdx + tilesPerPage;
//   return flatList.slice(startIdx, endIdx);
// };

// const Home = () => {
//   const sortedFaculty = groupByDomain(facultyData);
//   const [currentPage, setCurrentPage] = useState(1);
//   const tilesPerPage = 20;
//   const totalPages = Math.ceil(Object.values(sortedFaculty).flat().length / tilesPerPage);
//   const paginatedFaculty = paginateFaculty(sortedFaculty, currentPage, tilesPerPage);

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       {paginatedFaculty.map((item, index) =>
//         item.type === "header" ? (
//           <h2 key={index} className="text-3xl font-bold text-blue-950 mb-4">{item.name}</h2>
//         ) : null
//       )}

//       {/* Grid Layout for 4 Tiles Per Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {paginatedFaculty.map(
//           (item, index) =>
//             item.type !== "header" && (
//               <Tile
//                 key={index}
//                 image={item["Image URL"]}
//                 name={item["Name"]}
//                 role={item["Designation"]}
//                 email={item["Email"]}
//                 slots={4}
//               />
//             )
//         )}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex w-full justify-center gap-4 mt-6">
//         <button onClick={handlePrev} disabled={currentPage === 1} className="bg-blue-950 text-white text-2xl rounded-md p-2 disabled:opacity-50">
//           <FaCaretLeft />
//         </button>
//         <span className="text-xl font-semibold text-gray-800">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNext} disabled={currentPage === totalPages} className="bg-blue-950 text-white text-2xl rounded-md p-2 disabled:opacity-50">
//           <FaCaretRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
