import { useState } from "react";
import JobListingItem from "../components/JobListingItem";
import Modal from "../components/Modal";

export default function Home() {
  const [isCoverLetter, setIsCoverLetter] = useState("yes");
  const [isModal, setIsModal] = useState(false);

  const getIfCoverLetter = (e: any) => {
    setIsCoverLetter(e.target.value);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <main className="my-12">
      <section className="flex justify-between items-center pb-12">
        <h1 className="text-white font-bold text-4xl">Your Jobs</h1>
        <button className="listing-button" onClick={toggleModal}>
          Add new job
        </button>
      </section>
      <Modal
        isModal={isModal}
        toggleModal={toggleModal}
        isCoverLetter={isCoverLetter}
        getIfCoverLetter={getIfCoverLetter}
      />
      <JobListingItem />
      <JobListingItem />
      <JobListingItem />
      <JobListingItem />
      <JobListingItem />
      <JobListingItem />
    </main>
  );
}
