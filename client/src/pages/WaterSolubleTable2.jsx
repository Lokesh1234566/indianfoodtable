/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Table } from "flowbite-react";
import wsvtable2 from "../assets/wsvtable.json";

const WaterSoluble = ({ setClickedWaterSoluble }) => {
  const [sortedData, setSortedData] = useState(wsvtable2.wsv_details); // Store sorted data
  const [sortConfig, setSortConfig] = useState({ key: null, ascending: true }); // Track sorting state

  // Function to sort the data based on field
  const handleSort = (field) => {
    const ascending = sortConfig.key === field ? !sortConfig.ascending : true; // Toggle sort order if the same field is clicked
    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[field] < b[field]) {
        return ascending ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sortedArray); // Update state with sorted data
    setSortConfig({ key: field, ascending }); // Update sorting config
  };

  return (
    <div className="overflow-x-auto h-[50vh] ">
      <div className="min-w-full border border-gray-200 sm:rounded-lg">
        <Table className="table-auto w-full text-sm text-left text-gray-500 border-collapse">
          <Table.Head className="bg-gray-50 border border-slate-500 text-xs sm:text-sm sticky top-0 z-30">
            <Table.HeadCell
              className="border border-slate-400 sticky left-0 top-0 bg-blue-400 text-white z-10"
              // onClick={() => handleHeadCellClick("SI No")}
            >
              SI No
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 sticky left-0 top-0 bg-blue-400 text-white z-10 cursor-pointer"
              // onClick={() => handleSort("Food_Code")}
            >
              Food Code{" "}
              {/* {sortConfig.key === "Food_Code"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""} */}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              // onClick={() => handleSort("Food_Name")}
            >
              Food Name{" "}
              {/* {sortConfig.key === "Food_Name"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""} */}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              // onClick={() => handleSort("No_of_Regions")}
            >
              No of Regions{" "}
              {/* {sortConfig.key === "No_of_Regions"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""} */}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Thiamine_B1")} // Sort by Thiamine (B1)
            >
              Thiamine(B1){" "}
              {sortConfig.key === "Thiamine_B1"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Riboflavin_B2")} // Sort by Riboflavin (B2)
            >
              Riboflavin(B2){" "}
              {sortConfig.key === "Riboflavin_B2"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Niacin_B3")} // Sort by Niacin (B3)
            >
              Niacin(B3){" "}
              {sortConfig.key === "Niacin_B3"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Pantothenic_Acid_B5")} // Sort by Pantothenic Acid (B5)
            >
              Pantothenic Acid (B5){" "}
              {sortConfig.key === "Pantothenic_Acid_B5"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Total_B6")} // Sort by Total (B6)
            >
              Total (B6){" "}
              {sortConfig.key === "Total_B6"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Biotin_B7")} // Sort by Biotin (B7)
            >
              Biotin(B7){" "}
              {sortConfig.key === "Biotin_B7"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Total_Folates_B9")} // Sort by Total Folates (B9)
            >
              Total Folates(B9){" "}
              {sortConfig.key === "Total_Folates_B9"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-white cursor-pointer"
              onClick={() => handleSort("Total_Ascorbic_acid")} // Sort by Total Ascorbic Acid
            >
              Total Ascorbic acid{" "}
              {sortConfig.key === "Total_Ascorbic_acid"
                ? sortConfig.ascending
                  ? "↑"
                  : "↓"
                : ""}
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="h-full">
            {sortedData.map((wsv, id) => (
              <Table.Row key={id} className="border border-slate-400">
                <Table.Cell className="border border-slate-400 sticky left-0 bg-white">
                  {id + 1}
                </Table.Cell>
                <Table.Cell className="border border-slate-400 sticky left-[50px] bg-white text-green-700 ">
                  {wsv.Food_Code}
                </Table.Cell>
                <Table.Cell
                  className="border border-slate-400 cursor-pointer"
                  onClick={() => setClickedWaterSoluble(wsv)}
                >
                  {wsv.Food_Name}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.No_of_Regions}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Thiamine_B1}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Riboflavin_B2}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Niacin_B3}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Pantothenic_Acid_B5}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Total_B6}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Biotin_B7}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Total_Folates_B9}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {wsv.Total_Ascorbic_acid}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default WaterSoluble;
