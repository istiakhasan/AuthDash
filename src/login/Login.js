import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import loginimg from "../asset/images/login/login.jpg";
import JsButton from "../common/JsButton";
import Jsinput from "../common/Jsinput";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginSuccess } from "../redux/authSlice";
import { toast } from "react-toastify";

const loginValidation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const merchantValidation = yup.object().shape({
  storeDetails: yup.string().required("Store ID is required"),
  password: yup.string().required("Password is required"),
});

const memberValidation = yup.object().shape({
  phone: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});

const signupValidation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  storeDetails: yup.string(),
  phone: yup.string(),
});

const Login = ({ initialUserType = "Admin" }) => {
  const [smallSize, setSmallSize] = useState(false);
  const [userType, setUserType] = useState(initialUserType);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/dashboard/${role.toLowerCase()}`);
    }
  }, [isAuthenticated, role, navigate]);

  useEffect(() => {
    const handleResize = () => setSmallSize(window.innerWidth < 750);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { handleSubmit, handleChange, errors, touched, resetForm, values } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
        storeDetails: "",
        phone: "",
      },
      validationSchema: isSignUp ? signupValidation : userType === "Admin" ? loginValidation : userType === "Merchant" ? merchantValidation : memberValidation,
      onSubmit: async (values) => {
        if (isSignUp) {
          console.log("Signing up", values);
        }

 
        const fakeToken = `${userType.toLowerCase()}-token-${Date.now()}`;
        dispatch(loginSuccess({ token: fakeToken, role: userType }));
        toast.success('Authentication successful! Welcome back.')
      },
      enableReinitialize: true,
    });

  useEffect(() => resetForm(), [userType, isSignUp, resetForm]);

  return (
    <div className="min-vh-100 login-wraper container-fluid p-0">
      <div style={{ position: "relative" }} className="component-background-color p-0 m-0 vh-100 vw-100">
        <div style={{ width: "50%" }} className={`vh-100 p-0 right-side-container ${!smallSize ? "left-side" : ""}`}>
          <img style={{ objectFit: "cover" }} className="img-fluid h-100 w-100" src={loginimg} alt="Login" />
        </div>

        <div className={`vh-100 p-0 d-flex align-items-center justify-content-center ${smallSize ? "w-100" : "right-side-reverse w-50"}`}>
          <div style={{ padding: "40px", minHeight: "400px", width: "488px", border: "3px solid #fcfefe" }} className="d-flex align-items-center">
            <form className="w-100" onSubmit={handleSubmit}>
              <div className="d-flex gap-3 mb-4">
                {["Admin", "Merchant", "Member"].map((type) => (
                  <div key={type} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={type}
                      name="userType"
                      value={type}
                      checked={userType === type}
                      onChange={() => setUserType(type)}
                    />
                    <label className="form-check-label" htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>

              <h2 className="mb-4" style={{ fontSize: "24px", textTransform: "uppercase", fontWeight: "600" }}>
                {isSignUp ? "Sign Up" : `${userType} Login`}
              </h2>

              {/* Form Fields */}
              {(userType === "Admin" || isSignUp) && (
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <Jsinput type="email" placeholder="Enter your email" className="js-input" name="email" value={values.email} onChange={handleChange} error={touched.email && errors.email} />
                </div>
              )}

              {(userType === "Merchant" || isSignUp) && (
                <div className="mb-3">
                  <label className="form-label">Store Details</label>
                  <Jsinput type="text" placeholder="Enter your store details" className="js-input" name="storeDetails" value={values.storeDetails} onChange={handleChange} error={touched.storeDetails && errors.storeDetails} />
                </div>
              )}

              {(userType === "Member" || isSignUp) && (
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <Jsinput type="tel" placeholder="Enter your phone number" className="js-input" name="phone" value={values.phone} onChange={handleChange} error={touched.phone && errors.phone} />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Password</label>
                <Jsinput type="password" placeholder="Enter your password" className="js-input" name="password" value={values.password} onChange={handleChange} error={touched.password && errors.password} />
              </div>

              {isSignUp && (
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <Jsinput type="password" placeholder="Confirm your password" className="js-input" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} error={touched.confirmPassword && errors.confirmPassword} />
                </div>
              )}

              <div className="mt-4">
                <JsButton type="submit" variant="contained" className="w-100">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </JsButton>
              </div>

              <div className="mt-3 text-center">
                <button type="button" className="btn btn-link p-0" onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
