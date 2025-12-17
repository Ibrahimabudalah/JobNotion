import React, { useState } from "react";

export default function JobListingItem() {
  const [selectedDropdownValue, setSelectedDropdownValue] =
    useState("inProgress");

  const getDropdownValue = (e: any) => {
    setSelectedDropdownValue(e.target.value);
  };

  return (
    <section className="grid grid-cols-8 gap-4 items-start bg-[#382863] text-white border border-white/30 rounded-lg px-2 py-4 my-2">
      <section className="col-span-2">
        <div>
          <h2 className="listing-label">Company Name</h2>
          <p className="text-[#B8B2D8]">Loremasd asd</p>
        </div>
      </section>

      <section className="col-span-2">
        <div>
          <h2 className="listing-label">Job Title</h2>
          <p className="text-[#B8B2D8]">lorem dfsd sdf</p>
        </div>
      </section>

      <section className="col-span-2">
        <div>
          <h2 className="listing-label">Date Submitted</h2>
          <p className="text-[#B8B2D8]">21-01-2025</p>
        </div>
      </section>

      <section className="col-span-2">
        <div>
          <h2 className="listing-label">Progress</h2>
          <select
            value={selectedDropdownValue}
            onChange={getDropdownValue}
            name="progressMenu"
            id="progress"
            className={`border border-white/30 rounded-lg bg-[#2a0e61] hover:bg-[#6d55b3] px-2 py-[6px] ${
              selectedDropdownValue == "inProgress"
                ? "text-[#B8B2D8]"
                : selectedDropdownValue == "screening"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            <option value="inProgress" defaultChecked>
              In progress
            </option>
            <option value="screening">Screening</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </section>
    </section>
  );
}
