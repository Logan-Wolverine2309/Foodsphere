import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Pizza", "Burger", "Ice Cream"]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const allItems = [
        "Pizza", "Burger", "Pasta", "Salad", "Sushi",
        "Tacos", "Sandwich", "Ice Cream", "Steak", "Fries"
      ];
      const result = allItems.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(result);
    };

    const timeout = setTimeout(() => {
      if (query.trim()) fetchData();
    }, 300); // simulate delay

    return () => clearTimeout(timeout);
  }, [query]);

  const handleClearRecent = () => setRecentSearches([]);
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Search bar */}
      <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for food..."
          className="bg-transparent outline-none flex-1 text-lg"
          value={query}
          onChange={handleSearchChange}
        />
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Recent searches</h2>
            <button onClick={handleClearRecent} className="text-green-400 text-sm">
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((item, index) => (
              <div key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Continue browsing */}
      {query && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Continue browsing</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.length ? (
              filteredItems.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                  {item}
                </div>
              ))
            ) : (
              <p className="text-gray-400">No food found</p>
            )}
          </div>
        </div>
      )}

      {/* Trending Categories */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Trending in your city</h2>
        <div className="grid grid-cols-3 gap-4">
          {["Lassi", "Ice Cream", "Buttermilk", "Soda", "Cold Coffee", "Snacks"].map((item, idx) => (
            <div key={idx} className="bg-gray-600 rounded-lg p-3 text-center text-black font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
