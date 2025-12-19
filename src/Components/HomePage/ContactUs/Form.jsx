import React from "react";
import CommanButton from "../../Comman/CommanButton";
import Input from "../../Comman/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
const Form = () => {
  const validatationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("name is required")
      .min(5, "min 5 letters")
      .max(12, "max 10 letters"),
    userNumber: Yup.string()
      .required("Number is required")
      .max(11, "number should be 11 digits"),
    userEmail: Yup.string()
      .required("email is required")
      .email("email is required"),
    userDescription: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      userNumber: "",
      userEmail: "",
      userDescription: "",
    },
    validationSchema: validatationSchema,
    onSubmit: (value) => {
      // console.log(value.userNumber);
      const user = {
        name: value.userName,
        number: value.userNumber,
        email: value.userEmail,
        description: value.userDescription,
      };
      formik.resetForm();
      console.log("🚀 ~ Form ~ user:", user);
    },
  });

  return (
    <div className="bg-white text-black placeholder:text-black   tablet:w-[60%] s_phone:w-full  p-8 rounded-2xl s_phone:px-5  m_phone:px-10">
      <h1 className="my-7 font-bold text-dark-blue  s_phone:text-xl  laptop:text-4xl ">
        Contact Us{" "}
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col  gap-7 s_phone:gap-4 laptop:gap-10   "
      >
        <Input
          placeholder={"Your Name "}
          type={"text"}
          value={formik.values.userName}
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.userName && formik.touched.userName && (
          <p className="text-sm text-red-400">{formik.errors.userName}</p>
        )}
        <Input
          type="number"
          placeholder="Phone No "
          value={formik.values.userNumber}
          name="userNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.userNumber && formik.touched.userNumber && (
          <p className="text-sm text-red-400">{formik.errors.userNumber}</p>
        )}
        <Input
          type="email"
          placeholder="You Email "
          value={formik.values.userEmail}
          name="userEmail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.userEmail && formik.touched.userEmail && (
          <p className="text-sm text-red-400">{formik.errors.userEmail}</p>
        )}
        <Input
          type="textarea"
          placeholder="Your Message "
          value={formik.values.userDescription}
          name="userDescription"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></Input>
        {formik.errors.userDescription && formik.touched.userDescription && (
          <p className="text-sm text-red-400">
            {formik.errors.userDescription}
          </p>
        )}
        <CommanButton
          arrow={true}
          disabled={!formik.dirty || !formik.isValid}
          type="submit"
          text={"Send message"}
          className={`border-none laptop:px-12!  laptop:py-5! s_phone:px-16 s_phone:py-3 s_phone:m-auto  tablet:m-0 ${!formik.dirty || !formik.isValid ? " opacity-90" : ""} `}
        />
      </form>
    </div>
  );
};

export default Form;
