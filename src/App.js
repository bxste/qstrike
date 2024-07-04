import React, { useState } from 'react';
import ColorList from './components/colorList';
import ColorPreview from './components/ColorPreview';

const App = () => {
  // State to store the currently selected color
  const [selectedColor, setSelectedColor] = useState(null);

  // Handler function to update the selected color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row lg:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section - ColorList */}
        <div className="p-9">
          <ColorList onColorSelect={handleColorSelect} />
        </div>
      </div>
      
      {/* Right Section - ColorPreview */}
      <div>
        <div className="p-9">
          {selectedColor ? (
            // Display ColorPreview component if a color is selected
            <div className="flex justify-center items-center h-full">
              <ColorPreview selectedColor={selectedColor} />
            </div>
          ) : (
            // Display placeholder text if no color is selected
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-600">Select a color to preview</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
