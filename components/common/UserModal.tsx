// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3 overflow-y-auto max-h-[70vh]">
          <input name="name" onChange={handleChange} placeholder="Name" className="border p-2 w-full" />
          <input name="username" onChange={handleChange} placeholder="Username" className="border p-2 w-full" />
          <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
          <input name="phone" onChange={handleChange} placeholder="Phone" className="border p-2 w-full" />
          <input name="website" onChange={handleChange} placeholder="Website" className="border p-2 w-full" />
          
          <div className="border-t pt-2">
            <h3 className="font-semibold">Address</h3>
            <input name="address.street" onChange={handleChange} placeholder="Street" className="border p-2 w-full" />
            <input name="address.suite" onChange={handleChange} placeholder="Suite" className="border p-2 w-full" />
            <input name="address.city" onChange={handleChange} placeholder="City" className="border p-2 w-full" />
            <input name="address.zipcode" onChange={handleChange} placeholder="Zipcode" className="border p-2 w-full" />
            <input name="geo.lat" onChange={handleChange} placeholder="Latitude" className="border p-2 w-full" />
            <input name="geo.lng" onChange={handleChange} placeholder="Longitude" className="border p-2 w-full" />
          </div>

          <div className="border-t pt-2">
            <h3 className="font-semibold">Company</h3>
            <input name="company.name" onChange={handleChange} placeholder="Company Name" className="border p-2 w-full" />
            <input name="company.catchPhrase" onChange={handleChange} placeholder="Catch Phrase" className="border p-2 w-full" />
            <input name="company.bs" onChange={handleChange} placeholder="BS" className="border p-2 w-full" />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;