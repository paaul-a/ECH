import React, { useState } from "react";
import Logo5 from "../../logo/ECH_logo5.png";

function Form() {
  // State to track the current form section
  const [currentSection, setCurrentSection] = useState(1);

  // Function to handle the "Next" button click
  const handleNext = () => {
    setCurrentSection((prevSection) => prevSection + 1);
  };

  // Function to handle the "Previous" button click
  const handlePrevious = () => {
    setCurrentSection((prevSection) => prevSection - 1);
  };

  return (
    <>
      <div className="form-container">
        {/* progressbar */}
        <ul id="progressbar">
          <li className={currentSection === 1 ? "active" : ""}>Ad Content</li>
          <li className={currentSection === 2 ? "active" : ""}>
            Additional Information
          </li>
          <li className={currentSection === 3 ? "active" : ""}>
            Personal Details
          </li>
        </ul>

        {/* fieldsets */}
        <form id="msform" className="quote-form">
          {/* Account Setup */}
          {currentSection === 1 && (
            <fieldset className="form-fieldset">
              <h2 className="fs-title">Request a Quote</h2>
              <h3 className="fs-subtitle">Step 1: Ad Content</h3>
              {/* ... your existing code ... */}

              <textarea
                id="adText"
                name="adText"
                className="form-textarea"
                placeholder="PLACE AD TEXT HERE OR UPLOAD A FILE BELOW"
                required
              ></textarea>

              <label
                htmlFor="fileUpload"
                id="fileUploadLabel"
                className="form-label"
              >
                UPLOAD DOCUMENT OR PDF:
                <input
                  type="file"
                  id="fileUploadInput"
                  name="fileUpload"
                  className="form-file-input"
                />
              </label>

              <label className="form-label">
                AD SELECTIONS (Check all that apply)
              </label>
              <label className="form-checkbox-label">
                <input type="checkbox" name="selections" value="sundayPrint" />{" "}
                SUNDAY PRINT ADS
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                LOCAL OR CULTURAL PRINT AD
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                ONLINE JOB POSTING
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                RADIO ADVERTISING
              </label>

              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                TRADE JOURNAL
              </label>

              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                SWA JOB POSTING
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                CAMPUS POSTING
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                EMPLOYER WEBSITE TRACKING
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                />{" "}
                CAMPUS POSTING
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name="selections"
                  value="localCulturalPrint"
                  id="otherCheckbox"
                  onChange="toggleOtherInput()"
                />
                <input
                  type="text"
                  id="otherInput"
                  className="other-input"
                  placeholder="OTHER"
                  required
                />
              </label>

              <div className="buttons-container">
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={handleNext}
                />
              </div>
            </fieldset>
          )}

          {/* Additional Information */}
          {currentSection === 2 && (
            <fieldset id="additional-info" className="form-fieldset">
              <h2 className="fs-title">Additional Information</h2>
              <h3 className="fs-subtitle">Step 2: Provide Some Details</h3>
              <label htmlFor="additionalInstructions" className="form-label">
                ADDITIONAL INSTRUCTIONS OR NOTES
              </label>
              <textarea
                id="additionalInstructions"
                name="additionalInstructions"
                className="form-textarea"
                placeholder="Include Invoicing Instructions"
              ></textarea>
              <label htmlFor="jobLocationZip" className="form-label">
                JOB LOCATION ZIP CODE
              </label>
              <input
                type="text"
                id="jobLocationZip"
                name="jobLocationZip"
                placeholder="ex: 10011"
                className="form-input"
              />
              <label htmlFor="caseNumber" className="form-label">
                CASE OR REFERENCE NUMBER
              </label>
              <input
                type="text"
                id="caseNumber"
                name="caseNumber"
                className="form-input"
              />
              <div className="buttons-container">
                <input
                  type="button"
                  name="previous"
                  className="previous action-button"
                  value="Previous"
                  onClick={handlePrevious}
                />
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={handleNext}
                />
              </div>
            </fieldset>
          )}

          {/* Personal Details */}
          {currentSection === 3 && (
            <fieldset id="personal-details" className="form-fieldset">
              <h2 className="fs-title">Personal Details</h2>
              <h3 className="fs-subtitle">Step 3: Contact Information</h3>
              <div className="name-section">
                <label
                  id="firstNameLabel"
                  htmlFor="firstName"
                  className="form-label"
                >
                  NAME *
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-input"
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-input"
                    required
                  />
                </label>
              </div>

              <label htmlFor="email" className="form-label">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@email.com"
                className="form-input"
                required
              />

              <label htmlFor="companyName" className="form-label">
                COMPANY NAME *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="form-input"
                required
              />

              <label htmlFor="phoneNumber" className="form-label">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input"
              />
              {/* Buttons Container */}
              <div className="buttons-container">
                {/* Previous Button */}
                {currentSection > 1 && (
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button"
                    value="Previous"
                    onClick={handlePrevious}
                  />
                )}

                {/* Submit Button */}
                {currentSection === 3 && (
                  <a className="submit action-button" target="_top">
                    Submit
                  </a>
                )}
              </div>
            </fieldset>
          )}
        </form>
      </div>
    </>
  );
}

export default Form;
