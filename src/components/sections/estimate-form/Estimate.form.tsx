import React, { useRef, useState } from "react";
import Select, { SelectInstance } from "react-select";
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

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
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
    services: [] as string[],
  });

  const selectRef = useRef<SelectInstance<Option>>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(selectRef);
    const selectedServices = selectRef.current?.state.selectValue as {
      value: string;
      label: string;
    }[];
    const serviceValues = selectedServices.map((s) => s.value);

    const finalFormData = {
      ...formData,
      services: serviceValues,
    };

    console.log("Submitted Data:", finalFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          ref={selectRef}
        />
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </section>
  );
};

export { EstimateForm };
