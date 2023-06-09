import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import useToken from "../../hooks/useToken";

import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthState } from "../../context/AuthProvider";

const LearnerRegister = () => {
  // this state maintain account type and will be render according
  const [accountType, setAccountType] = useState(null);

  console.log(accountType);

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  const { user, createUser, setLoading, loading, updateUserProfile } =
    AuthState();

  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const [value, setValue] = useState("");

  // setUserTypeVal(value);
  //destructure token from use usetoken

  // const [token] = useToken(createdUserEmail);

  //get form registered from react form hook

  const [error, setError] = useState("");

  //navigate to homepage after signup
  const navigate = useNavigate();

  //state to display the password as text

  const [isDisplayText, setIsDisplayText] = useState(false);

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        handleUpdateUser();
        alert("user sighned up successfully");
        // toast.success(`Wow!!! User signed up successfully`, {
        //     position: toast.POSITION.TOP_CENTER,
        //     toastId: customId1,
        //     autoClose: 1000
        // });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    const handleUpdateUser = () => {
      const profile = {
        photoURL: data.photo,
        displayName: data.name,
      };
      //display user
      updateUserProfile(profile)
        .then(() => {
          saveUser(data.name, data.email, data.userType);
        })
        .catch((err) => console.log(err));
    };
  };

  const saveUser = (name, email, userType) => {
    // const user = {
    //     name: name,
    //     email: email,
    //     userType: userType
    // };
    // console.log(user);
    // fetch('https://vendor-store-server.vercel.app/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setCreatedUserEmail(email);
    //     })
    //     .catch(err => console.log(err))
  };

  //display password as a text clicking on eye icon
  const handleDisplayText = (e) => {
    e.preventDefault();
    isDisplayText === true ? setIsDisplayText(false) : setIsDisplayText(true);
  };

  return (
    <section className=" register_section py-10 bg-nudeBlue">
      <div className="container md:px-10 px-6">
        <div className=" form_wrapper bg-white  px-10 py-10 w-full mx-auto lg:max-w-3xl rounded">
          <h2 className="text-3xl font-semibold text-dark mt-5 mb-10 text-center">
            {!accountType && "Sign Up now!"}
            {accountType === "rider" && "Sign Up as Rider"}
            {accountType === "learner" && "Sign Up as Learner"}
          </h2>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-4 text-left"
          >
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center mt-3">
              {/* Account Type */}
              <div class="my-4">
                <label
                  for="entry"
                  class="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
                >
                  Account Type
                </label>

                <div class="flex gap-14">
                  <div class="inline-block radio">
                    <input
                      name="vehicleType"
                      type="radio"
                      id="R1"
                      hidden="hidden"
                      value="rider"
                      onClick={() => setAccountType("rider")}
                      required
                    />
                    <label
                      for="R1"
                      class="px-7 py-2.5 rounded-md flex justify-center items-center text-xd font-bold"
                    >
                      Rider
                    </label>
                  </div>
                  <div class="inline-block radio">
                    <input
                      name="vehicleType"
                      type="radio"
                      id="L1"
                      hidden="hidden"
                      value="learner"
                      onClick={() => setAccountType("learner")}
                    />
                    <label
                      for="L1"
                      class="px-10 py-2.5 rounded-md flex justify-center items-center text-xd font-bold"
                    >
                      Learner
                    </label>
                  </div>
                </div>
              </div>

              {/* Vehicle Type */}
              <div class="my-4">
                <label
                  for="entry"
                  class="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
                >
                  Vehicle Type
                </label>

                <div>
                  <div class="flex gap-14">
                    <div class="inline-block radio">
                      <input
                        name="answer"
                        type="radio"
                        id="B1"
                        hidden="hidden"
                        value="Car"
                      />
                      <label
                        for="B1"
                        class="px-7 py-2.5 rounded-md flex justify-center items-center text-xd font-bold"
                      >
                        Car
                      </label>
                    </div>
                    <div class="inline-block radio">
                      <input
                        name="answer"
                        type="radio"
                        id="C1"
                        hidden="hidden"
                        value="Bike"
                      />
                      <label
                        for="C1"
                        class="px-7 py-2.5 rounded-md flex justify-center items-center text-xd font-bold"
                      >
                        Bike
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              {/* user full name */}

              <div className="mb-1">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                    errors.name
                      ? " border border-red-500 focus:border-red-500"
                      : " border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* phone number */}
              <div className="mb-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Phone
                </label>

                <input
                  type="text"
                  className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                    errors.phone
                      ? " border border-red-500 focus:border-red-500"
                      : " border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Your Phone"
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              {/* user email */}
              <div className="mb-1">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                    errors.email
                      ? " border border-red-500 focus:border-red-500"
                      : " border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* user age */}
              <div className="mb-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Age
                </label>

                <input
                  type="text"
                  className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                    errors.age
                      ? " border border-red-500 focus:border-red-500"
                      : " border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Your Age"
                  {...register("age", {
                    required: "Age is required",
                  })}
                />
                {errors.age && (
                  <p className="text-red-500 mt-1">{errors.age.message}</p>
                )}
              </div>
            </div>

            {(!accountType || accountType === "rider") && (
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {/* user address */}
                <div className="mb-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your Address
                  </label>

                  <input
                    type="text"
                    className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                      errors.address
                        ? " border border-red-500 focus:border-red-500"
                        : " border border-gray-300 focus:border-blue-500"
                    }`}
                    placeholder="Your Address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="text-red-500 mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                {/* Area */}

                <select className="select select-bordered md:mt-6">
                  <option disabled selected>
                    Select Area
                  </option>
                  <option>Khulna</option>
                  <option>Dhaka</option>
                  <option>Rajshai</option>
                </select>
              </div>
            )}

            {(!accountType || accountType === "rider") && (
              <div>
                <div className="mb-4">
                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="mb-1">
                      <label
                        for="carName"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Car Name
                      </label>

                      <input
                        type="text"
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                          errors.name
                            ? " border border-red-500 focus:border-red-500"
                            : " border border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="Car Name"
                        {...register("carName", {
                          required: "Car Name is required",
                        })}
                      />
                      {errors.name && (
                        <p className="text-red-500 mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-1">
                      <label
                        for="carModel"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Car Model
                      </label>

                      <input
                        type="text"
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                          errors.name
                            ? " border border-red-500 focus:border-red-500"
                            : " border border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="Car Model"
                        {...register("carModel", {
                          required: "Car Model is required",
                        })}
                      />
                      {errors.name && (
                        <p className="text-red-500 mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-1">
                      <label
                        for="namePlate"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Name Plate
                      </label>

                      <input
                        type="text"
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                          errors.name
                            ? " border border-red-500 focus:border-red-500"
                            : " border border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="Name Plate"
                        {...register("namePlate", {
                          required: "Name Plate is required",
                        })}
                      />
                      {errors.name && (
                        <p className="text-red-500 mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid gap-5  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {/* user profile pic  */}
              <div className="mb-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Profile Photo
                </label>

                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  id="multiple_files"
                  type="file"
                  multiple
                  placeholder="Profile Photo"
                  {...register("photo", {
                    required: "Profile Photo is required",
                  })}
                />

                {errors.photo && (
                  <p className="text-red-500 mt-1">{errors.photo.message}</p>
                )}
              </div>

              {/* Nid pic */}
              <div className="mb-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  NId Photo
                </label>

                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  id="multiple_files"
                  type="file"
                  multiple
                  placeholder=" NID Photo"
                  {...register("nidPhoto", {
                    required: " NID Photo is required",
                  })}
                />

                {errors.nidPhoto && (
                  <p className="text-red-500 mt-1">{errors.nidPhoto.message}</p>
                )}
              </div>

              {/* driving License picture */}
              {(!accountType || accountType === "rider") && (
                <div className="mb-1 grid ">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Driving License Photo
                  </label>

                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                    id="multiple_files"
                    type="file"
                    multiple
                    placeholder=" Driving License Photo"
                    {...register("DLicensePhoto", {
                      required: " Driving License Photo is required",
                    })}
                  />

                  {errors.nidPhoto && (
                    <p className="text-red-500 mt-1">
                      {errors.nidPhoto.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              {/* user password */}
              <div className="mb-1 relative">
                <label
                  for="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type={isDisplayText ? "text" : "password"}
                  id="password"
                  className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                    errors.password
                      ? " border border-red-500 focus:border-red-500"
                      : " border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                />
                <button
                  className="absolute top-9 right-4"
                  onClick={handleDisplayText}
                >
                  {isDisplayText ? (
                    <span className="text-2xl text-dark ">
                      <MdOutlineRemoveRedEye />
                    </span>
                  ) : (
                    <span className="text-2xl text-dark ">
                      <RiEyeCloseLine />
                    </span>
                  )}
                </button>

                {errors.password && (
                  <p className="text-red-500 mt-1">{errors.password.message}</p>
                )}
              </div>
              {/* confirm password */}
              <div className="mb-1 relative">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Confirm Password
                </label>
                <input
                  type={isDisplayText ? "text" : "password"}
                  id="password"
                  className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  ${
                    errors.conPassword
                      ? " border border-red-500 focus:border-red-500"
                      : " border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Confirm Password"
                  {...register("conPassword", {
                    required: true,
                    validate: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    },
                  })}
                />
                <button
                  className="absolute top-9 right-4"
                  onClick={handleDisplayText}
                >
                  {isDisplayText ? (
                    <span className="text-2xl text-dark ">
                      <MdOutlineRemoveRedEye />
                    </span>
                  ) : (
                    <span className="text-2xl text-dark ">
                      <RiEyeCloseLine />
                    </span>
                  )}
                </button>

                {errors.conPassword && (
                  <p className="text-red-500 mt-1">
                    {errors.conPassword.message}
                  </p>
                )}
              </div>
            </div>
            <button
              className="bg-[#f90] text-white py-2 rounded-lg text-lg"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-between items-center py-6">
            <span className="text-normal text-dark font-normal ">
              Have an Account?
            </span>
            <span className="text-dark text-normal font-normal">
              <Link to="/login" className="underline">
                Login here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnerRegister;
