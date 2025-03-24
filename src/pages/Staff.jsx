import React from "react";
import Tile from "../components/Tile";
import facultyData from "../assets/cleaned_updated_faculty_details.json";

const Staff = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="font-bold text-blue-950 text-3xl mt-28 mb-4">Staff: A to Z</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facultyData.map((faculty, index) => (
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
  );
};

export default Staff;
