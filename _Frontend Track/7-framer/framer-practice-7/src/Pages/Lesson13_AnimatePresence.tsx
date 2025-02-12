import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Lesson13_AnimatePresence() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  const addItem = () => {
    const newItem = { id: Date.now(), text: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  const removeItem = (id : number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <button onClick={addItem} className="mb-4 w-full">
        Add Item
      </button>
      <ul className="space-y-2">
        <AnimatePresence>
          {items.map((item) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-gray-100 rounded-lg flex justify-between items-center"
            >
              {item.text}
              <button onClick={() => removeItem(item.id)} style={{backgroundColor: 'red',color:'whitesmoke'}}>
                Remove
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
