import React from "react";
import close from "../assets/logos/close.svg";

type ModalProps = {
  isModal: boolean;
  toggleModal: () => void;
  isCoverLetter: string;
  getIfCoverLetter: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function Modal({
  isModal,
  toggleModal,
  isCoverLetter,
  getIfCoverLetter,
}: ModalProps) {
  const timestamp = Date.now();
  const currentDate = new Date(timestamp).toISOString().slice(0, 10);

  return (
    <section
      className={`border-2 border-white/30 rounded-xl shadow-2xl text-white absolute bg-gradient-to-t from-[#1c014a] to-[#5c3c93] top-1/4 left-[9%] w-5/6 ${
        isModal ? "block" : "hidden"
      }`}
    >
      <form
        action=""
        method="POST"
        className="flex flex-col items-center gap-4 px-10 py-8"
      >
        <img
          src={close}
          alt="Close Modal"
          className="w-6 h-6 absolute top-6 right-4"
          onClick={toggleModal}
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <label className="listing-label">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company"
              className="listing-input"
            />
          </div>
          <div className="flex flex-col">
            <label className="listing-label">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job"
              className="listing-input"
            />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <label className="listing-label">Job URL</label>
            <input
              type="text"
              name="jobURL"
              id="jobURL"
              placeholder="Job URL"
              className="listing-input"
            />
          </div>
          <div className="flex flex-col">
            <label className="listing-label">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Remote"
              className="listing-input"
            />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <label className="listing-label">Resume Version</label>
            <input
              type="text"
              name="resumeVer"
              id="resumeVer"
              placeholder="John_Doe_X_Resume"
              className="listing-input"
            />
          </div>
          <div className="flex flex-col">
            <label className="listing-label">Cover Letter</label>
            <select
              value={isCoverLetter}
              onChange={getIfCoverLetter}
              name="coverLetter"
              id="coverLetter"
              className="listing-input px-20"
            >
              <option value="yes" defaultChecked>
                Yes
              </option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="listing-label">Job Description</label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            className="listing-input p-4 pb-12"
            placeholder="Paste the job description here.."
          ></textarea>
        </div>
        <button className="listing-button py-4 w-2/3" onClick={toggleModal}>
          Save Job
        </button>
      </form>
    </section>
  );
}
