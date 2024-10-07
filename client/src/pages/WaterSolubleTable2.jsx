/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Table } from "flowbite-react";
import wsvtable2 from "../assets/wsvtable.json";

const WaterSoluble = ({ setClickedWaterSoluble }) => {
  const [sortField, setSortField] = useState(null); // Track the field to sort by
  const [sortOrder, setSortOrder] = useState("desc"); // Track sorting order (asc or desc)

  // Function to sort the data
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "desc" ? "asc" : "desc"; // Toggle between asc and desc
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = [...wsvtable2.wsv_details].sort((a, b) => {
    if (!sortField) return 0; // If no sort field is selected, return original order
    const valA = parseFloat(a[sortField]) || 0; // Convert the value to float if it's numeric
    const valB = parseFloat(b[sortField]) || 0; // Convert the value to float if it's numeric

    if (sortOrder === "asc") {
      return valA - valB; // Ascending order for numbers
    } else {
      return valB - valA; // Descending order for numbers
    }
  });

  return (
    <div className="overflow-x-auto h-[50vh] ">
      <div className="min-w-full border border-gray-200 sm:rounded-lg">
        <Table className="table-auto w-full text-sm text-left text-gray-500 border-collapse">
          <Table.Head className="bg-gray-50 border border-slate-500 text-xs sm:text-sm sticky top-0 z-30">
            <Table.HeadCell
              className="border border-slate-400 sticky left-0 top-0 bg-blue-400 text-black z-10"
              // onClick={() => handleHeadCellClick("SI No")}
            >
              SI No
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 sticky left-0 top-0 bg-blue-400 text-black z-10 cursor-pointer"
              // onClick={() => handleSort("Food_Code")}
            >
              Food Code{" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              // onClick={() => handleSort("Food_Name")}
            >
              Food Name{" "}
            </Table.HeadCell>
            <Table.HeadCell className="border border-slate-400 bg-blue-400 text-black cursor-pointer">
              No of Regions{" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Thiamine_B1")} // Sort by Thiamine (B1)
            >
              Thiamine_B1
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Riboflavin_B2")} // Sort by Riboflavin (B2)
            >
              Riboflavin_B2
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Niacin_B3")} // Sort by Niacin (B3)
            >
              Niacin(B3){" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Pantothenic_Acid_B5")} // Sort by Pantothenic Acid (B5)
            >
              Pantothenic Acid (B5){" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Total_B6")} // Sort by Total (B6)
            >
              Total (B6){" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Biotin_B7")} // Sort by Biotin (B7)
            >
              Biotin(B7){" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Total_Folates_B9")} // Sort by Total Folates (B9)
            >
              Total Folates(B9){" "}
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-blue-400 text-black cursor-pointer"
              onClick={() => handleSort("Total_Ascorbic_acid")} // Sort by Total Ascorbic Acid
            >
              Total Ascorbic acid{" "}
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
