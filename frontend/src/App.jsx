import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import IDCardPreview from "./components/IDCardPreview";
import SavedCardsList from "./components/SavedCardsList";
import TemplateSwitcher from "./components/TemplateSwitcher";

const App = () => {
  const [studentData, setStudentData] = useState(null);
  const [template, setTemplate] = useState("template1");
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("studentCards")) || [];
    setSavedCards(stored);
  }, []);

  const handleSubmit = (data) => {
    setStudentData(data);

    const newSavedCards = [data, ...savedCards];
    setSavedCards(newSavedCards);

    try {
      localStorage.setItem("studentCards", JSON.stringify(newSavedCards));
    } catch (error) {
      if (error.name === "QuotaExceededError") {
        alert(
          "Unable to save card. Local storage quota exceeded. Please remove some saved cards or use a smaller image."
        );
      } else {
        console.error("Error saving to localStorage:", error);
      }
    }
  };

  const handleSelectSavedCard = (data) => {
    setStudentData(data);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100">
      <header className="py-6 mb-8 bg-gray-800 shadow-lg">
        <h1 className="text-center text-4xl font-bold">
          Smart Student ID Card Generator
        </h1>
      </header>

      <div>
        <main className="max-w-7xl mx-auto px-4">
          {/* StudentForm component */}
          <StudentForm onSubmit={handleSubmit} />

          {/* Template switcher / ID preview / saved cards, etc. */}
          <TemplateSwitcher template={template} setTemplate={setTemplate} />
        </main>
        {studentData && (
          <IDCardPreview student={studentData} template={template} />
        )}
      </div>
      <SavedCardsList
        savedCards={savedCards}
        onSelect={handleSelectSavedCard}
      />
    </div>
  );
};

export default App;
