import React, { useEffect, useState, useRef } from "react";

import { useForm, useFieldArray } from "react-hook-form";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

import moment from "moment";

import Network from "../../lib/axios.config";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ApplyNowModal(props: {
  onClose: any,
  jobId: any,
  jobTitle: any,
}) {
  const [caldendarShow, setCaldendarShow] = useState(false);

  const [validityFromCaldendarShow, setValidityFromCaldendarShow] =
    useState(false);

  const [validityToCaldendarShow, setValidityToCaldendarShow] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [showFileError, setShowFileError] = useState(false);

  const refCalendar = useRef < any > null;

  const refValidityFrom = useRef < any > null;

  const refValidityTo = useRef < any > null;

  function handleClickOutside(event: any) {
    if (caldendarShow) {
      if (refCalendar.current && !refCalendar.current?.contains(event.target)) {
        setCaldendarShow(!caldendarShow);
      }
    } else if (validityFromCaldendarShow) {
      if (
        refValidityFrom.current &&
        !refValidityFrom.current?.contains(event.target)
      ) {
        setValidityFromCaldendarShow(!validityFromCaldendarShow);
      }
    } else if (validityToCaldendarShow) {
      if (
        refValidityTo.current &&
        !refValidityTo.current?.contains(event.target)
      ) {
        setValidityToCaldendarShow(!validityToCaldendarShow);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const {
    handleSubmit,

    control,

    getValues,

    setValue,

    register,

    watch,

    formState: { errors },
  } = useForm({ mode: "onChange" });

  const {
    fields: certificationsFields,

    append: certificationsAppend,

    remove: certificationsRemove,
  } = useFieldArray({
    control,

    name: "certifications",
  });

  const {
    fields: socialFields,

    append: socialAppend,

    remove: socialRemove,
  } = useFieldArray({
    control,

    name: "social",
  });

  useEffect(() => {
    setValue("certifications", [
      { name: "", validity_form: "", validity_to: "" },
    ]);

    setValue("social", [{ name: "", link: "" }]);
  }, []);

  const handleCalendarChange = (data: any) => {
    setCaldendarShow(false);

    setValue("dob", moment(data).format("DD/MM/YYYY"));
  };

  const handleValidityFromCalendarChange = (data: any, index: any) => {
    setValidityFromCaldendarShow(false);

    setValue(
      `certifications.${index}.validity_form`,

      moment(data).format("DD/MM/YYYY")
    );
  };

  const handleValidityToCalendarChange = (data: any, index: any) => {
    setValidityToCaldendarShow(false);

    setValue(
      `certifications.${index}.validity_to`,

      moment(data).format("DD/MM/YYYY")
    );
  };

  const onApplyNowSubmit = async (data: any) => {
    if (!selectedFile || selectedFile === "") {
      setShowFileError(true);

      return;
    }

    setShowFileError(false);

    const filteredCertifications = data.certifications.filter(
      (item: any) => item.name !== ""
    );

    const filteredSocial = data.social.filter((item: any) => item.name !== "");

    const formData = {
      name: data.name,

      email: data.email,

      phone: data.phone,

      dob: new Date(data.dob),

      experience: data.experience,

      currentJobRole: data.current_role,

      currentCTC: data.current_ctc,

      noticePeriod: data.notice_period_days,

      currentLocation: data.current_location,

      highestQualification: data.highest_qualification,

      certifications: filteredCertifications,

      socialMediaLinks: filteredSocial,

      jobId: props.jobId,

      resumeLink: selectedFile,

      jobTitle: props.jobTitle,
    };

    await Network.post("/application", formData);

    toast.success("Applocation Submitted Succssfully", {
      position: "top-right",

      autoClose: 5000,

      hideProgressBar: false,

      closeOnClick: true,

      pauseOnHover: true,

      draggable: true,

      progress: undefined,

      theme: "light",
    });

    props.onClose();
  };

  const onUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const fileToUpload = e.target?.files[0];

    const fileExt = fileToUpload.name.split(".").pop();

    const formData = new FormData();

    if (
      fileExt?.toLowerCase() == "pdf" ||
      fileExt?.toLowerCase() == "doc" ||
      fileExt?.toLowerCase() == "docx"
    ) {
      formData.append("image", fileToUpload, fileToUpload.name);

      const id = toast.loading("Uploading Your Resume...");

      const resp = await Network.http.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          authorization: "Bearer job-application",
        },
      });

      setSelectedFile(resp.data.url);

      setShowFileError(false);

      //do something else

      toast.update(id, {
        render: "Resume Uploaded Succssfully",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } else {
      toast.error("Please upload only pdf, doc or docx file", {
        position: "top-right",

        autoClose: 5000,

        hideProgressBar: false,

        closeOnClick: true,

        pauseOnHover: true,

        draggable: true,

        progress: undefined,

        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal__header">
          <h5 className="modal__title">Apply Now</h5>

          <button
            type="button"
            onClick={props.onClose}
            className="modal__close"
          >
            <svg
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0911 12.02C11.8966 12.02 11.7188 11.9368 11.5473 11.7653C10.7614 10.98 6.8882 7.10794 6.8882 7.10794C6.8882 7.10794 3.39533 10.5567 2.23371 11.7211C2.03351 11.9219 1.84421 12.0148 1.6377 12.0148C1.58263 12.0148 1.52527 12.008 1.46561 11.9953C1.19543 11.9357 0.983755 11.7487 0.898856 11.494C0.814532 11.2399 0.871322 10.9634 1.05202 10.754C1.09217 10.7075 5.76961 6.05646 5.76961 6.05646C5.76961 6.05646 2.29509 2.51253 1.13233 1.35206C0.871895 1.09221 0.799043 0.82948 0.902298 0.523731C1.00383 0.223719 1.20977 0.0562166 1.53158 0.0108993C1.56714 0.00573651 1.60214 0.00344168 1.63598 0.00344168C1.84306 0.00344168 2.03408 0.098092 2.236 0.30116C3.0695 1.13752 6.88763 5.05719 6.88763 5.05719C6.88763 5.05719 10.2813 1.52071 11.5496 0.2524C11.7194 0.0826034 11.8961 0 12.0899 0C12.1748 0 12.2643 0.0160616 12.3567 0.0481853C12.6556 0.15144 12.8213 0.358523 12.8644 0.680907C12.8976 0.931587 12.807 1.149 12.5689 1.38533C11.7773 2.17409 8.0699 6.05646 8.0699 6.05646C8.0699 6.05646 11.4268 9.49657 12.5718 10.637C12.8081 10.8727 12.8982 11.0901 12.8638 11.3414C12.8196 11.6638 12.6527 11.8703 12.3532 11.9724C12.2632 12.0045 12.1743 12.02 12.0911 12.02Z" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onApplyNowSubmit)}>
          <div className="modal__body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>

                <input
                  type="text"
                  className="form-control"
                  {...register("name", { required: true })}
                />

                {errors.name && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>

                <input
                  type="text"
                  className="form-control"
                  {...register("phone", { required: true })}
                />

                {errors.phone && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>

                <input
                  type="text"
                  className="form-control"
                  {...register("email", {
                    required: true,

                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email?.type === "required" && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}

                {errors.email?.type === "pattern" && (
                  <span className="form-text form-error">
                    Please enter a valid email.
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">DOB</label>

                <div className="form-calendar" ref={refCalendar}>
                  <input
                    type="text"
                    className="form-control"
                    onFocus={() => setCaldendarShow(true)}
                    {...register("dob", { required: true })}
                  />

                  {caldendarShow && (
                    <div className="react-calendar-wrapper" id="calendar">
                      <Calendar
                        onChange={handleCalendarChange}
                        value={moment()
                          .add(-18 * 365, "d")

                          .toDate()}
                        maxDate={moment()
                          .add(-18 * 365, "d")

                          .toDate()}
                      />
                    </div>
                  )}

                  {errors.dob && (
                    <span className="form-text form-error">
                      This is a required field
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Experience (Years)</label>

                <input
                  type="number"
                  className="form-control"
                  {...register("experience", { required: true })}
                />

                {errors.experience && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Current Job Role</label>

                <input
                  type="text"
                  className="form-control"
                  {...register("current_role", { required: true })}
                />

                {errors.current_role && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Current CTC (lakh/year)</label>

                <input
                  type="text"
                  className="form-control"
                  {...register("current_ctc", { required: true })}
                />

                {errors.current_ctc && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Notice Period (Days)</label>

                <input
                  type="number"
                  className="form-control"
                  {...register("notice_period_days", { required: true })}
                />

                {errors.notice_period_days && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Current Location</label>

                <input
                  type="text"
                  className="form-control"
                  {...register("current_location", { required: true })}
                />

                {errors.current_location && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Highest Qualification</label>

                <input
                  type="text"
                  className="form-control"
                  {...register("highest_qualification", { required: true })}
                />

                {errors.highest_qualification && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>
            </div>

            <hr />

            <div className="row mt-3">
              <div className="col-md-12">
                <h6 className="color-secondary">Certifications:</h6>

                {certificationsFields.map((item, index) => (
                  <div
                    className={`row ${index > 0 ? "mt-3" : ""}`}
                    key={item.id}
                  >
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Title</label>

                      <input
                        type="text"
                        className="form-control"
                        {...register(`certifications.${index}.name`, {
                          validate: (value) => {
                            if (
                              value === "" &&
                              (watch(
                                `certifications.${index}.validity_form`
                              ) !== "" ||
                                watch(`certifications.${index}.validity_to`) !==
                                  "")
                            )
                              return false;

                            return true;
                          },
                        })}
                      />

                      {errors.certifications &&
                        errors.certifications[index]?.name?.type ===
                          "validate" && (
                          <span className="form-text form-error">
                            This is a required field
                          </span>
                        )}
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="form-label">Validity Form</label>

                      <div className="form-calendar" ref={refValidityFrom}>
                        <input
                          type="text"
                          onFocus={() => setValidityFromCaldendarShow(true)}
                          className="form-control"
                          {...register(
                            `certifications.${index}.validity_form`,

                            {
                              validate: (value) => {
                                if (value !== "") return true;

                                if (
                                  getValues(`certifications.${index}.name`) !==
                                  ""
                                )
                                  return false;

                                return true;
                              },
                            }
                          )}
                        />

                        {validityFromCaldendarShow && (
                          <div className="react-calendar-wrapper" id="calendar">
                            <Calendar
                              onChange={(value: any) =>
                                handleValidityFromCalendarChange(value, index)
                              }
                              value={moment().toDate()}
                            />
                          </div>
                        )}

                        {errors.certifications &&
                        errors.certifications[index]?.validity_form?.type ===
                          "validate" ? (
                          <span className="form-text form-error">
                            This is a required field
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="form-label">Validity To</label>

                      <div className="form-calendar" ref={refValidityTo}>
                        <input
                          type="text"
                          onFocus={() => setValidityToCaldendarShow(true)}
                          className="form-control"
                          {...register(`certifications.${index}.validity_to`)}
                        />

                        {validityToCaldendarShow && (
                          <div className="react-calendar-wrapper" id="calendar">
                            <Calendar
                              onChange={(value: any) =>
                                handleValidityToCalendarChange(value, index)
                              }
                              value={moment().toDate()}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="button-group">
                        {certificationsFields.length !== index + 1 ? (
                          <button
                            type="button"
                            className="button--icon"
                            onClick={() => certificationsRemove(index)}
                          >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                          </button>
                        ) : null}

                        {certificationsFields.length === index + 1 ? (
                          <button
                            type="button"
                            className="button--icon"
                            onClick={() =>
                              certificationsAppend({
                                name: "",

                                validity_form: "",

                                validity_to: "",
                              })
                            }
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr />

            <div className="row mt-3">
              <div className="col-md-12">
                <h6 className="color-secondary">Social Media:</h6>

                {socialFields.map((item, index) => (
                  <div
                    className={`row ${index > 0 ? "mt-3" : ""}`}
                    key={item.id}
                  >
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>

                      <input
                        type="text"
                        className="form-control"
                        {...register(`social.${index}.name`, {
                          validate: (value) => {
                            if (
                              value === "" &&
                              watch(`social.${index}.link`) !== ""
                            )
                              return false;

                            return true;
                          },
                        })}
                      />

                      {errors.social &&
                        errors.social[index]?.name?.type === "validate" && (
                          <span className="form-text form-error">
                            This is a required field
                          </span>
                        )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Link</label>

                      <input
                        type="text"
                        className="form-control"
                        {...register(`social.${index}.link`, {
                          validate: (value) => {
                            if (value !== "") return true;

                            if (watch(`social.${index}.name`) !== "")
                              return false;

                            return true;
                          },
                        })}
                      />

                      {errors.social &&
                        errors.social[index]?.link?.type === "validate" && (
                          <span className="form-text form-error">
                            This is a required field
                          </span>
                        )}
                    </div>

                    <div className="col-md-12">
                      <div className="button-group">
                        {socialFields.length !== index + 1 ? (
                          <button
                            type="button"
                            className="button--icon"
                            onClick={() => socialRemove(index)}
                          >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                          </button>
                        ) : null}

                        {socialFields.length === index + 1 ? (
                          <button
                            type="button"
                            className="button--icon"
                            onClick={() =>
                              socialAppend({
                                name: "",

                                link: "",
                              })
                            }
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-12">
                <label className="form-label">Upload Resume</label>

                <input
                  className="form-control"
                  type="file"
                  onInput={onUploadFile}
                />

                {/* <input

                  type="file"

                  className="form-control"

                  {...register("resume", { required: true })}

                /> */}

                {showFileError && (
                  <span className="form-text form-error">
                    This is a required field
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="modal__footer">
            <div className="button-group">
              <button type="submit" className="button button--primary ms-auto">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
