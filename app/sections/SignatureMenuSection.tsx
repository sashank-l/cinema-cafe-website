"use client";

import { motion } from "framer-motion";
import MenuCard from "@/components/MenuCard";

const signatures = [
  {
    title: "Special Chicken Biryani",
    description: "Boneless chicken slow-cooked in aromatic basmati, Cinema Cafe's most-ordered dish.",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop",
    tag: "Most Ordered",
  },
  {
    title: "Ulavacharu Chicken Biryani",
    description: "Vijayawada's signature horsegram ulavacharu gravy poured over layered biryani.",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop",
    tag: "Local Favourite",
  },
  {
    title: "Cinema Cafe Special Burger",
    description: "House-special patty stacked with fresh veggies, cheese, and our secret cinema sauce.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
    tag: "House Special",
  },
  {
    title: "Paneer 65",
    description: "Crispy marinated paneer cubes deep-fried with curry leaves and South Indian spices.",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    title: "Chicken White Sauce Pasta",
    description: "Silky creamy béchamel pasta with tender chicken pieces and Italian herbs.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop",
  },
  {
    title: "Vanilla Ice Cream with Espresso",
    description: "Cinema Cafe's dessert signature — hot espresso poured over premium vanilla ice cream.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop",
    tag: "Must Try",
  },
];

export default function SignatureMenuSection() {
  return (
    <section id="signature" className="py-24 bg-vintage-paper relative overflow-hidden">
      {/* Torn Paper Separator Top */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 md:h-8 bg-vintage-red rotate-1 scale-110 origin-left"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 95% 100%, 90% 70%, 85% 100%, 80% 80%, 75% 100%, 70% 70%, 65% 100%, 60% 80%, 55% 100%, 50% 70%, 45% 100%, 40% 80%, 35% 100%, 30% 70%, 25% 100%, 20% 80%, 15% 100%, 10% 70%, 5% 100%, 0% 80%)" }}
      />
      <div 
        className="absolute top-2 left-0 right-0 h-4 md:h-8 bg-vintage-yellow -rotate-1 scale-110 origin-right"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 95% 100%, 90% 70%, 85% 100%, 80% 80%, 75% 100%, 70% 70%, 65% 100%, 60% 80%, 55% 100%, 50% 70%, 45% 100%, 40% 80%, 35% 100%, 30% 70%, 25% 100%, 20% 80%, 15% 100%, 10% 70%, 5% 100%, 0% 80%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Spotlight Behind Heading */}
          <div className="absolute inset-0 bg-spotlight-warm -z-10 scale-150" />
          
          <div className="inline-block bg-vintage-ink text-vintage-yellow font-bebas text-2xl tracking-widest px-6 py-2 -rotate-2 shadow-[4px_4px_0px_#B32400] mb-6">
            సూపర్ హిట్ వంటకాలు
          </div>
          <h2 className="section-heading">HOUSE FAVOURITES</h2>
          <p className="font-baloo font-bold text-vintage-ink text-xl md:text-2xl mt-4 max-w-xl mx-auto">
            BLOCKBUSTER DISHES LOVED BY HUNDREDS IN MOGHALRAJAPURAM.
          </p>
        </motion.div>

        {/* Dense Poster Wall Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-4 lg:-ml-4 lg:-mr-4">
          {signatures.map((item, i) => {
            // Slight static random rotations to make it look like haphazardly glued posters
            const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-0"];
            const staticRot = rotations[i % rotations.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={staticRot}
              >
                <MenuCard {...item} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-vintage text-3xl px-12 py-4 -rotate-1"
          >
            VIEW FULL CATALOGUE
          </button>
        </motion.div>
      </div>
    </section>
  );
}
