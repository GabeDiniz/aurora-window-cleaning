import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

interface FormData {
  firstName: string;
  lastName: string;
  addressLine1: string;
  city: string;
  province: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  services: string[];
}

const options = [
  { value: "Window cleaning", label: "Window cleaning" },
  { value: "Eavestrough cleaning", label: "Eavestrough cleaning" },
  { value: "Gutter Guard Installation", label: "Gutter Guard Installation" },
  { value: "Pressure Washing", label: "Pressure Washing" },
];

const animatedComponents = makeAnimated();

const EstimateForm: React.FC = () => {
  // State to handle form data
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    province: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    services: [],
  });

  // Function to update state on input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "services") {
      // Handle multi-select for services
      const selectedOptions = Array.from(
        (e.target as HTMLSelectElement).selectedOptions,
        (option) => option.value
      );
      setFormData((prev) => ({ ...prev, [name]: selectedOptions }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Here you can add what to do after form submission, e.g., sending data to a server
  };

  return (
    <section className="py-20 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            required
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="province"
            placeholder="Province"
            required
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            required
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="input"
          />
        </div>
        <Select
          className=""
          name="service"
          options={options}
          isMulti
          components={animatedComponents}
        />
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </section>
  );
};

export { EstimateForm };
