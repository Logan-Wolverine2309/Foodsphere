import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const MOCK_FOOD_DATA = [
  {
    name: "Margherita Pizza",
    image: "https://source.unsplash.com/featured/?pizza",
    restaurant: "Pizza Palace"
  },
  {
    name: "Cheeseburger",
    image: "https://source.unsplash.com/featured/?burger",
    restaurant: "Burger Joint"
  },
  {
    name: "Spaghetti Pasta",
    image: "https://source.unsplash.com/featured/?pasta",
    restaurant: "Pasta Point"
  },
  {
    name: "Green Salad",
    image: "https://source.unsplash.com/featured/?salad",
    restaurant: "Healthy Bites"
  },
  {
    name: "Sushi Platter",
    image: "https://source.unsplash.com/featured/?sushi",
    restaurant: "Tokyo Dine"
  },
  {
    name: "Vanilla Ice Cream",
    image: "https://source.unsplash.com/featured/?icecream",
    restaurant: "Frosty Treats"
  }
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Pizza", "Burger", "Ice Cream"]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const result = MOCK_FOOD_DATA.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(result);
    };

    const timeout = setTimeout(() => {
      if (query.trim()) fetchData();
    }, 300);

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
            <button onClick={handleClearRecent} className="text-green-400 text-sm">Clear</button>
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
          <h2 className="text-lg font-semibold mb-4">Search Results</h2>
          {filteredItems.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">From {item.restaurant}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No food found</p>
          )}
        </div>
      )}

      {/* Trending Categories */}
      <div className="mt-12">
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
