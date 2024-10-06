/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Table } from "flowbite-react";
import sampledata from "../assets/sampledata.json";

const Carotenoids = ({ setClickedCarotenoids }) => {
  const [sortField, setSortField] = useState(null); // Track the field to sort by
  const [sortOrder, setSortOrder] = useState("desc"); // Track sorting order (asc or desc)

  // Function to sort the data
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "desc" ? "asc" : "desc"; // Toggle between asc and desc
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = [...sampledata.sampledata].sort((a, b) => {
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
            <Table.HeadCell className="border border-slate-400 sticky left-0 top-0 bg-teal-400 text-white z-10">
              SI No
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 sticky left-0 top-0 bg-teal-400 text-white z-10 cursor-pointer"
              // onClick={() => handleSort("Food_Code")}
            >
              Food Code
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-teal-400 text-white cursor-pointer"
              // onClick={() => handleSort("Food_Name")}
            >
              Food Name
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-teal-400 text-white cursor-pointer"
              // onClick={() => handleSort("No_of_Regions")}
            >
              No of Regions
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-teal-400 text-white cursor-pointer"
              onClick={() => handleSort("Total")}
            >
              Total
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-teal-400 text-white cursor-pointer"
              onClick={() => handleSort("Oxalate_Soluble")}
            >
              Oxalate Soluble
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-teal-400 text-white cursor-pointer"
              onClick={() => handleSort("Oxalate_Insoluble")}
            >
              Oxalate Insoluble
            </Table.HeadCell>
            <Table.HeadCell
              className="border border-slate-400 bg-teal-400 text-white cursor-pointer"
              onClick={() => handleSort("Cis_Aconitic_Acid")}
            >
              Cis Aconitic Acid
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="h-full">
            {sortedData.map((carot, id) => (
              <Table.Row key={id} className="border border-slate-400">
                <Table.Cell className="border border-slate-400 sticky left-0 bg-white">
                  {id + 1}
                </Table.Cell>
                <Table.Cell className="border border-slate-400 sticky left-[50px] bg-white text-green-700 ">
                  {carot.Food_Code}
                </Table.Cell>
                <Table.Cell
                  className="border border-slate-400 cursor-pointer"
                  onClick={() => setClickedCarotenoids(carot)}
                >
                  {carot.Food_Name}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {carot.No_of_Regions}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {carot.Total}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {carot.Oxalate_Soluble}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {carot.Oxalate_Insoluble}
                </Table.Cell>
                <Table.Cell className="border border-slate-400">
                  {carot.Cis_Aconitic_Acid}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Carotenoids;
