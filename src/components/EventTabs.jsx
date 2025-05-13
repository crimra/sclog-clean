import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imageMap } from '../utils/imageMap';
import { videoMap } from '../utils/videoMap';

const EventTabs = () => {
  const { t } = useTranslation();
  const tabsData = [
    {
      title: t('eventTabs.orphTitle'),
      images: ['orph.jpg', 'orph2.jpg', 'orph3.jpg', 'orph2.jpg'],
      description: t('eventTabs.orphDesc'),
    },
    {
      title: t('eventTabs.cfcoTitle'),
      type: 'video',
      videos: ['cfco.mp4'],
      description: t('eventTabs.cfcoDesc'),
    },
    {
      title: t('eventTabs.louteteTitle'),
      images: ['lou.jpg', 'lou2.jpg', 'lou3.jpg', 'lou4.jpg'],
      description: t('eventTabs.louteteDesc'),
    },
    {
      title: t('eventTabs.ouessoTitle'),
      images: ['card.png'],
      description: t('eventTabs.ouessoDesc'),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabsData[activeIndex];

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

      {/* Galerie ou Vidéo */}
      <div className="overflow-x-auto whitespace-nowrap pb-4 rse-galerie">
        {activeTab.type === 'video' ? (
          activeTab.videos.map((vidName, i) => (
            <video
              key={i}
              controls
              className="inline-block w-96 h-60 mx-2 shadow"
            >
              <source src={videoMap[vidName]} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          ))
        ) : (
          activeTab.images.map((imgName, i) => (
            <img
              key={i}
              src={imageMap[imgName]}
              alt={imgName}
              className="inline-block w-64 h-40 object-cover mx-2 shadow"
            />
          ))
        )}
      </div>

      {/* Description */}
      <div className="mt-6 max-w-3xl mx-auto text-center text-gray-700 text-lg rse-text flex justify-center items-center">
        <p>{activeTab.description}</p>
      </div>
    </section>
  );
};

export default EventTabs;
