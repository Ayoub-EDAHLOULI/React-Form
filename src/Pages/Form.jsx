import React from "react";
import formImage from "../form.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function Form() {
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 charracters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.boolean().required("Terms of service must be checked."),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      <main className="h-screen flex items-center justify-center">
        <form
          className="bg-white flex rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex-1 text-gray-700  p-20">
            <h1 className="text-3xl pb-2">Let's get started 👋</h1>
            <p className="text-lg  text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download.
            </p>
            <div className="mt-6">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 outline-none focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 outline-none focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Country input field */}
              <div className="pb-4">
                <label
                  htmlFor="country"
                  className="block font-latoBold text-sm pb-2"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>
              {/* Terms of service*/}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Term of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <Link
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 px-10 mt-6 rounded-lg w-full"
                to="/success"
              >
                Start learning today!
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src={formImage}
              alt="Logo"
              className=" object-cover rounded-lg h-full"
            />
          </div>
        </form>
      </main>
      ;
    </m.div>
  );
}
