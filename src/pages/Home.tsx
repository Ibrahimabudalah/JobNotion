import React from "react";
import JobListingItem from "../components/JobListingItem";

export default function Home() {
  return (
    <main className="my-12">
      <section className="flex justify-between items-center pb-12">
        <h1 className="text-white font-bold text-4xl">Your Jobs</h1>
        <button className="bg-[#2a0e61] text-white font-bold hover:bg-[#6d55b3] border border-white/30 px-8 py-2 rounded-lg">
          Add new job
        </button>
      </section>

      <JobListingItem />
    </main>
  );
}
