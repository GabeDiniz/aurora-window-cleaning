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
    <section className="relative">
      {/* Background to fill to space out Footer */}
      <div className="bg-classicBlue h-52" />
      <form
        onSubmit={handleSubmit}
        className="bg-offLaceWhite space-y-4 w-fit p-10 rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="text-xl">
          Enter your information to schedule an estimate
        </h1>
        <div className="flex gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            className="inputClass"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
            className="inputClass"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
            className="inputClass"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
            className="inputClass"
          />
          <input
            type="text"
            name="province"
            placeholder="Province"
            required
            onChange={handleChange}
            className="inputClass"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            required
            onChange={handleChange}
            className="inputClass"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="inputClass"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="inputClass"
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
