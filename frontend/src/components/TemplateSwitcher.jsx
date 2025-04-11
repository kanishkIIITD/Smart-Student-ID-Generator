import React from "react";

const TemplateSwitcher = ({ template, setTemplate }) => {
  const handleChange = (e) => {
    setTemplate(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto my-4">
      <label htmlFor="template" className="mr-2 mb-1 font-semibold">
        Choose Template:
      </label>
      <select
        id="template"
        value={template}
        onChange={handleChange}
        className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
      >
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
      </select>
    </div>
  );
};

export default TemplateSwitcher;
