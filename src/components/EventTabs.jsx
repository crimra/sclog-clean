import React, { useState } from 'react';
import { imageMap } from '../utils/imageMap';

const tabsData = [
  {
    title: 'SCLOG & Orphelinat',
    images: ['card.png', 'card.png'],
    description: 'SCLOG a offert des kits scolaires à l’orphelinat Cœur Céleste.',
  },
  {
    title: 'Don CFCO 2024',
    images: ['card.png'],
    description: 'Soutien à la modernisation du CFCO Brazzaville.',
  },
  {
    title: 'Loutété',
    images: ['card-blue.png'],
    description: 'Extension du site logistique de Loutété.',
  },
  {
    title: 'Ouesso',
    images: ['card.png'],
    description: 'Déploiement logistique au nord du Congo.',
  },
];

const EventTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabsData[activeIndex];

  console.log("Image active tab:", activeTab.images);
console.log("Image map keys:", Object.keys(imageMap));


  return (
    <section className="bg-gray-50 py-12 px-4 rse-onglets">

      {/* Onglets */}
      <div className="flex flex-wrap gap-4 mb-8 rse-onglet">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 font-medium transition border ${
              index === activeIndex ? "bg-[#1F458E] text-white" : "bg-white text-[#1F458E] border-[#1F458E]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Galerie */}
      <div className="overflow-x-auto whitespace-nowrap pb-4 rse-galerie">
            {activeTab.images.map((imgName, i) => (
        <img
            key={i}
            src={imageMap[imgName]}
            alt={imgName}
            className="inline-block w-64 h-40 object-cover mx-2 shadow"
        />
        ))}
      </div>

      {/* Description */}
      <div className="mt-6 max-w-3xl mx-auto text-center text-gray-700 text-lg">
        {activeTab.description}
      </div>
    </section>
  );
};

export default EventTabs;
