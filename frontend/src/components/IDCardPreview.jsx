import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";

const IDCardPreview = ({ student, template }) => {
  const cardRef = useRef(null);

  const downloadPNG = () => {
    if (!cardRef.current) return;
    toPng(cardRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${student.rollNumber || "student"}-id.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error("Failed to generate image:", err));
  };

  const qrData = { ...student };
  if (qrData.photo) {
    delete qrData.photo;
  }

  const templateStyles = {
    template1:
      "bg-gray-600 shadow-lg p-4 text-white rounded-xl flex gap-4 items-center",
    template2: "bg-gray-500 p-4 text-white rounded-xl shadow-inner",
  };

  return (
    <div className="my-6 flex flex-col items-center ">
      <div ref={cardRef} className={templateStyles[template]}>
        <div>
          <h2 className="text-xl font-bold mb-2">{student.name}</h2>
          <p>Roll Number: {student.rollNumber}</p>
          <p>Class & Division: {student.classDivision}</p>
          {student.photo && (
            <img
              src={student.photo}
              alt="Student"
              className="w-32 h-32 object-cover rounded-full my-2"
              onError={(e) => (e.target.src = "/assets/default-avatar.png")}
            />
          )}
          {student.allergies && student.allergies.length > 0 && (
            <p>Allergies: {student.allergies.join(", ")}</p>
          )}
          <p>Rack Number: {student.rackNumber}</p>
          <p>Bus Route: {student.busRoute}</p>
        </div>
        <div className="mt-4">
          <QRCodeSVG value={JSON.stringify(qrData)} size={128} />
        </div>
      </div>
      <button
        onClick={downloadPNG}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download as PNG
      </button>
    </div>
  );
};

export default IDCardPreview;
