"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCard, { MenuCardProps } from "@/components/MenuCard";

const categories = [
  "Coffee & Beverages",
  "Starters",
  "Main Course & Biryani",
  "Burgers, Sandwiches & Pizza",
  "Pasta & Noodles",
  "Desserts",
];

type MenuItems = Record<string, MenuCardProps[]>;

const menuItems: MenuItems = {
  "Coffee & Beverages": [
    {
      title: "Assam Tea",
      description: "Classic strong Assam brew served hot with milk.",
      price: "₹40",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop",
    },
    {
      title: "Masala Tea",
      description: "Aromatic spiced tea with ginger, cardamom and cloves.",
      price: "₹50",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&auto=format&fit=crop",
    },
    {
      title: "Lemon Buttermilk",
      description: "Cool, tangy lemon-infused buttermilk — a South Indian classic.",
      price: "₹60",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop",
    },
    {
      title: "Vanilla Ice Cream With Espresso",
      description: "Rich espresso poured over creamy vanilla ice cream.",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop",
      tag: "Popular",
    },
  ],
  "Starters": [
    {
      title: "Paneer 65",
      description: "Crispy marinated paneer deep-fried with spices and curry leaves.",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop",
      tag: "Best Seller",
    },
    {
      title: "Chilli Paneer",
      description: "Paneer tossed in bold chilli sauce with capsicum and onions.",
      price: "₹190",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop",
    },
    {
      title: "Chicken Lollipop",
      description: "Juicy chicken drumettes coated in spicy batter and fried crisp.",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&auto=format&fit=crop",
    },
    {
      title: "Veg Manchurian",
      description: "Crispy vegetable dumplings in tangy Indo-Chinese manchurian gravy.",
      price: "₹170",
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&auto=format&fit=crop",
    },
  ],
  "Main Course & Biryani": [
    {
      title: "Special Chicken Biryani (Boneless)",
      description: "Aromatic basmati rice layered with tender boneless chicken.",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop",
      tag: "Must Try",
    },
    {
      title: "Ulavacharu Chicken Biryani",
      description: "Signature biryani with rich horsegram ulavacharu gravy.",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop",
    },
    {
      title: "Kaju Paneer Biryani",
      description: "Fragrant biryani with cashews and paneer in saffron rice.",
      price: "₹230",
      image: "https://images.unsplash.com/photo-1630851840633-f96999247032?w=600&auto=format&fit=crop",
    },
    {
      title: "Mushroom Biryani",
      description: "Earthy mushrooms slow-cooked with basmati and whole spices.",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1512058556646-c4da40fba323?w=600&auto=format&fit=crop",
    },
  ],
  "Burgers, Sandwiches & Pizza": [
    {
      title: "Cinema Cafe Special Veg Burger",
      description: "House-special patty with fresh veggies and our signature sauce.",
      price: "₹140",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
      tag: "House Special",
    },
    {
      title: "Cinema Cafe Special Chicken Burger",
      description: "Crispy chicken fillet with lettuce, cheese, and chipotle mayo.",
      price: "₹170",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop",
    },
    {
      title: "Omelette Pizza",
      description: "Unique thin-crust pizza topped with a fluffy omelette and cheese.",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop",
    },
    {
      title: "Cinema Cafe Special Veg Sandwich",
      description: "Loaded grilled sandwich with veggies, cheese, and secret chutney.",
      price: "₹130",
      image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&auto=format&fit=crop",
    },
  ],
  "Pasta & Noodles": [
    {
      title: "Chicken White Sauce Pasta",
      description: "Creamy béchamel pasta with tender chicken and herbs.",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop",
      tag: "Top Pick",
    },
    {
      title: "Veg Red Sauce Pasta",
      description: "Classic tomato arrabbiata pasta with fresh vegetables.",
      price: "₹190",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop",
    },
    {
      title: "Schezwan Chicken Noodles",
      description: "Wok-tossed noodles in fiery Schezwan sauce with chicken.",
      price: "₹210",
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&auto=format&fit=crop",
    },
    {
      title: "Schezwan Veg Noodles",
      description: "Crisp vegetables tossed in spicy Schezwan sauce with egg noodles.",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop",
    },
  ],
  "Desserts": [
    {
      title: "Vanilla Ice Cream With Espresso",
      description: "Velvety vanilla ice cream with a hot espresso pour-over.",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop",
      tag: "Must Try",
    },
    {
      title: "Chocolate Brownie",
      description: "Warm fudgy brownie with a scoop of ice cream and chocolate drizzle.",
      price: "₹130",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&auto=format&fit=crop",
    },
    {
      title: "Ice Cream Sundae",
      description: "Three scoops of premium ice cream with toppings of your choice.",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop",
    },
    {
      title: "Waffle",
      description: "Crispy Belgian waffle with maple syrup and fresh cream.",
      price: "₹160",
      image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=600&auto=format&fit=crop",
    },
  ],
};

export default function InteractiveMenuSection() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="menu" className="py-24 bg-vintage-paper relative overflow-hidden border-t-[16px] border-b-[8px] border-vintage-ink">
      
      {/* Background graphic elements */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[repeating-linear-gradient(45deg,#1A1512,#1A1512_2px,transparent_2px,transparent_8px)] opacity-5 -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-spotlight-warm -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-vintage-red px-6 py-2 border-4 border-vintage-ink rotate-2 shadow-[4px_4px_0px_#1A1512] mb-6">
             <span className="font-bebas text-3xl tracking-widest text-vintage-cream dropdown-shadow">
               EXPLORE THE MENU
             </span>
          </div>
          <h2 className="section-heading">COMPLETE CATALOGUE</h2>
          <p className="font-baloo font-bold text-vintage-ink text-xl md:text-2xl mt-4 max-w-xl mx-auto">
            నగరంలో అత్యుత్తమ రుచులు. FROM SIGNATURE BIRYANIS TO ARTISAN COFFEES.
          </p>
          <p className="text-vintage-ink/60 font-bebas text-2xl mt-2 tracking-widest">
            AVG ₹450 TICKET FOR TWO
          </p>
        </motion.div>

        {/* Tab Bar - Ticket Tape Style */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-3 font-bebas text-2xl tracking-wide border-4 transition-all duration-300 ${
                activeTab === cat
                  ? "bg-vintage-yellow border-vintage-ink text-vintage-ink shadow-[4px_4px_0px_#1A1512] -translate-y-1"
                  : "bg-vintage-cream border-vintage-ink/20 text-vintage-ink hover:border-vintage-ink hover:shadow-[4px_4px_0px_#1A1512]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: 20, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-4 lg:-ml-4 lg:-mr-4"
          >
            {menuItems[activeTab].map((item, i) => {
              const staticRot = i % 2 === 0 ? "rotate-1" : "-rotate-1";
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  className={staticRot}
                >
                  <MenuCard {...item} />
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Order Online CTA - Vintage Ticket Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20"
        >
          <div className="bg-vintage-ink text-vintage-cream font-bebas text-2xl tracking-widest px-6 py-2 -rotate-1 shadow-[4px_4px_0px_#B32400]">
            HOME DELIVERY AVAILABLE
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vintage-outline border-vintage-orange text-vintage-orange hover:bg-vintage-orange hover:text-vintage-cream px-6 py-2 shadow-[4px_4px_0px_#D95C14]"
            >
              ORDER VIA SWIGGY
            </a>
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vintage-outline border-vintage-red text-vintage-red hover:bg-vintage-red hover:text-vintage-cream px-6 py-2 shadow-[4px_4px_0px_#B32400]"
            >
              ORDER VIA ZOMATO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
