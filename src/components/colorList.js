import React, { useState, useEffect } from 'react';
import { fetchColors } from '../services/colorsService';

const ColorList = ({ onColorSelect }) => {
  // State to store the list of colors
  const [colors, setColors] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // useEffect to fetch colors when the component mounts
  useEffect(() => {
    const fetchAndSetColors = async () => {
      try {
        // Fetch colors from the service
        const colorsData = await fetchColors();
        if (Array.isArray(colorsData)) {
          // Set the colors if the data is valid
          setColors(colorsData);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError('Failed to fetch colors');
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetColors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Colors:</h2>
      <ul className="list-none p-0">
        {colors.map((color) => (
          <li key={color.id} className="mb-4 flex items-center">
            {/* Display color box */}
            <span className="inline-block h-8 " style={{ backgroundColor: color.hex_code }}></span>
            {/* Display color name */}
            <span className="flex-grow mr-[150px]">{color.name}</span>
            {/* Button to preview the selected color */}
            <button 
              className="bg-blue-500 text-white py-2 px-3 rounded ml-2 mr-8"
              onClick={() => onColorSelect(color)}
            >
              Preview
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
