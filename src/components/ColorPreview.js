import React from 'react';

const ColorPreview = ({ selectedColor }) => {
  // If no color is selected, return null to render nothing
  if (!selectedColor) {
    return null;
  }

  // Destructure the selected color object
  const { name, hex_code, color_code } = selectedColor;

  return (
    <div
      className="flex flex-col items-center justify-center w-[400px] h-[300px] p-4 box-border text-center"
      style={{
        // Set background color dynamically based on the selected color's hex code
        backgroundColor: `#${hex_code}`,
        // Set text color to a contrasting color based on the background color
        color: getContrastingTextColor(hex_code),
      }}
    >
      {/* Display selected color's name */}
      <p className="mb-2"><strong>Name:</strong> {name}</p>
      {/* Display selected color's hex code */}
      <p className="mb-2"><strong>Hex:</strong> {hex_code}</p>
      {/* Display selected color's color code */}
      <p><strong>Color Code:</strong> {color_code}</p>
    </div>
  );
};

// Function to calculate and return a contrasting text color (black or white)
const getContrastingTextColor = (hexColor) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  // Calculate brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // Return black text for light backgrounds and white text for dark backgrounds
  return brightness > 155 ? '#000' : '#fff';
};

export default ColorPreview;
