import React, { useState } from "react";
import {
  FaUser,
  FaIdCard,
  FaChalkboardTeacher,
  FaSyringe,
  FaCamera,
  FaBus,
} from "react-icons/fa";

const StudentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    classDivision: "",
    allergies: [],
    rackNumber: "",
    busRoute: "",
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageError, setImageError] = useState("");

  const allergyOptions = ["Dust", "Pollen", "Food", "Medicine", "Others"];
  const classOptions = ["1A", "1B", "2A", "2B"];
  const busRoutes = ["Route 1", "Route 2", "Route 3"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAllergyChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      allergies: checked
        ? [...prev.allergies, value]
        : prev.allergies.filter((a) => a !== value),
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageError("");
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error reading image file:", error);
        setImageError("Error processing image file.");
        setPreviewUrl(null);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const completeData = {
      ...formData,
      photo: previewUrl,
    };

    onSubmit(completeData);

    setFormData({
      name: "",
      rollNumber: "",
      classDivision: "",
      allergies: [],
      rackNumber: "",
      busRoute: "",
    });
    setPreviewUrl(null);
    setImageError("");
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-center text-3xl font-bold mb-8">
        Student Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 rounded-lg shadow-xl p-6 space-y-6"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold" htmlFor="name">
            <FaUser className="inline mr-2" /> Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Roll Number */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold" htmlFor="rollNumber">
            <FaIdCard className="inline mr-2" /> Roll Number
          </label>
          <input
            id="rollNumber"
            name="rollNumber"
            placeholder="Enter your roll number"
            value={formData.rollNumber}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Class & Division */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold" htmlFor="classDivision">
            <FaChalkboardTeacher className="inline mr-2" /> Class & Division
          </label>
          <select
            id="classDivision"
            name="classDivision"
            value={formData.classDivision}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Class & Division</option>
            {classOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Allergies (multi-select) */}
        <div className="flex flex-col">
          <span className="mb-1 font-semibold">
            <FaSyringe className="inline mr-2" /> Allergies
          </span>
          <div className="flex flex-wrap space-x-4">
            {allergyOptions.map((a) => (
              <label key={a} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  value={a}
                  checked={formData.allergies.includes(a)}
                  onChange={handleAllergyChange}
                  className="rounded text-blue-500 focus:ring-0"
                />
                <span>{a}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Photo Upload */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold" htmlFor="photoUpload">
            <FaCamera className="inline mr-2" /> Photo
          </label>
          <input
            id="photoUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
          {imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
          )}
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full mt-2"
            />
          )}
        </div>

        {/* Rack Number */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold" htmlFor="rackNumber">
            Rack Number
          </label>
          <input
            id="rackNumber"
            name="rackNumber"
            placeholder="Enter rack number"
            value={formData.rackNumber}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Bus Route */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold" htmlFor="busRoute">
            <FaBus className="inline mr-2" /> Bus Route
          </label>
          <select
            id="busRoute"
            name="busRoute"
            value={formData.busRoute}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Bus Route</option>
            {busRoutes.map((route) => (
              <option key={route} value={route}>
                {route}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-4 justify-end mt-6">
          {/* Optional Reset Button */}
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: "",
                rollNumber: "",
                classDivision: "",
                allergies: [],
                rackNumber: "",
                busRoute: "",
              });
              setPreviewUrl(null);
              setImageError("");
            }}
            className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded text-white font-semibold"
          >
            Reset
          </button>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white font-semibold"
          >
            Generate ID Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
