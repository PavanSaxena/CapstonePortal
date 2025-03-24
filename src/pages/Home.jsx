import React, { useState } from "react";
import Tile from "../components/Tile";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import facultyData from "../assets/cleaned_updated_faculty_details.json";

const allowedDomains = [
  "AI",
  "Artificial Intelligence",
  "Augmented & Virtual Reality",
  "Blockchain Technology",
  "Cloud Computing",
  "Computer Networks",
  "Computer Vision",
  "Cyber Security",
  "Data Analytics",
  "Deep Learning",
  "Deep Neural Networks",
  "Data Mining",
  "Gen AI",
  "Explainable AI",
  "Agentic AI",
  "Healthcare Analytics",
  "IoT",
  "Knowledge Graph",
  "Machine Learning",
  "Natural Language Processing",
  "Robotic Process Automation",
  "Signal Processing",
  "System and Architecture / Parallel Computing / Compiler Optimization",
  "Web Intelligence"
];

const groupByDomain = (facultyList) => {
  const domainMap = {};
  facultyList.forEach((faculty) => {
    Object.keys(faculty).forEach((key) => {
      if (key.startsWith("Domain-") && faculty[key]) {
        const matchedDomain = allowedDomains.find((allowed) =>
          faculty[key].toLowerCase().includes(allowed.toLowerCase())
        );

        if (matchedDomain) {
          if (!domainMap[matchedDomain]) {
            domainMap[matchedDomain] = [];
          }
          domainMap[matchedDomain].push(faculty);
        }
      }
    });
  });
  return domainMap;
};

const Home = () => {
  const sortedFaculty = groupByDomain(facultyData);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const domains = Object.entries(sortedFaculty);
  const totalPages = Math.ceil(domains.length / itemsPerPage);
  const paginatedDomains = domains.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {paginatedDomains.map(([domain, facultyList]) => (
        <div key={domain} className="mb-10">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">{domain}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facultyList.map((faculty, index) => (
            <Tile
              key={index}
              image={faculty["Image URL"]}
              name={faculty["Name"]}
              role={faculty["Designation"]}
              email={faculty["Email"]}
              info={faculty["Profile URL"]}
              domains={[
                faculty["Domain-1"],
                faculty["Domain-2"],
                faculty["Domain-3"]
              ].filter(Boolean)}
              slots={4}
            />            
            ))}
          </div>
        </div>
      ))}
      <div className="flex w-full justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-blue-950 text-white text-2xl rounded-md p-2 disabled:opacity-50"
        >
          <FaCaretLeft />
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-blue-950 text-white text-2xl rounded-md p-2 disabled:opacity-50"
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
