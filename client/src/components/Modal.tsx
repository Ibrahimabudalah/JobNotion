import React, { useState } from "react";
import close from "../assets/logos/close.svg";
import axios from "axios";

type ModalProps = {
  isModal: boolean;
  toggleModal: () => void;
};

export default function Modal({ isModal, toggleModal }: ModalProps) {
  const jobPostingAPI = process.env.REACT_APP_JOB_POSTING_API;
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobURL, setJobURL] = useState("");
  const [resumeAppliedWith, setResumeAppliedWith] = useState("");
  const [isCoverLetter, setIsCoverLetter] = useState("yes");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const timestamp = Date.now();
  const currentDate = new Date(timestamp).toISOString().slice(0, 10);


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("jobTitle", jobTitle);
    formData.append("jobURL", jobURL);
    formData.append("resumeAppliedWith", resumeAppliedWith);
    formData.append("isCoverLetter", isCoverLetter);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("currentDate", currentDate);

    if (!jobPostingAPI) {
      throw new Error("Missing REACT_APP_JOB_POSTING_API");
    }
    axios
      .post(jobPostingAPI, formData)
      .then(function (res) {
        console.log(res.data);
      })
      .catch((e) => {
        console.log("ERROR: " + e);
      });
  };

  return (
    <section
      className={`border-2 border-white/30 rounded-xl shadow-2xl text-white absolute bg-gradient-to-t from-[#1c014a] to-[#5c3c93] top-1/4 left-[9%] w-5/6 ${
        isModal ? "block" : "hidden"
      }`}
    >
      <form
        method="POST"
        onSubmit={handleSubmit}
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
              onChange={(e) => setCompanyName(e.target.value)}
              required
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
              onChange={(e) => setJobTitle(e.target.value)}
              required
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
              onChange={(e) => setJobURL(e.target.value)}
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
              onChange={(e) => setLocation(e.target.value)}
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
              required
              onChange={(e) => setResumeAppliedWith(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="listing-label">Cover Letter</label>
            <select
              value={isCoverLetter}
              onChange={(e) => setIsCoverLetter(e.target.value)}
              name="coverLetter"
              id="coverLetter"
              className="listing-input px-20"
              required
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
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="listing-button py-4 w-2/3" onClick={toggleModal}>
          Save Job
        </button>
      </form>
    </section>
  );
}
