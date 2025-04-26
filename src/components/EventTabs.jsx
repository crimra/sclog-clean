import React, { useState } from 'react';
import { imageMap } from '../utils/imageMap';
import { videoMap } from '../utils/videoMap';




const tabsData = [
  {
    title: 'SCLOG & Orphelinat',
    images: ['orph.jpg', 'orph2.jpg', 'orph3.jpg', 'orph2.jpg'],
    description: "L’initiative confirme à nouveau la volonté de cette entreprise à soutenir l’école congolaise et à jouer sa partition pour la formation des élites du pays. Ce don comprenant des livres, des cahiers, des stylos, des crayons, des sacs à dos et d’autres fournitures essentielles permettra aux enfants de trois orphelinats bénéficiaire à renouer cette année avec l’école. A l’orphelinat Notre Dame de Nazareth, la sœur Marie Thérèse Ongayolo héberge une soixantaine d'enfants, qui fort heureusement, vont presque tous à l'école, a réceptionné un lot de kits scolaires complets. Emu par ce geste généreux, elle a indiqué : « Merci de tout cœur, la chose importante s’est de leur donner une formation scolaire. L’effort que vous faites pour nous aider n’est pas vain. Tous ne réussissent pas mais certains deviendrons des cadres demain. Que votre entreprise grandisse ». Réagissant à ce propos, la directrice générale de la SCLOG, Amandine Sinonin, a encouragé ces enfants en ces termes : « Travaillez bien, soyez de grand opérateurs pour pouvoir passer stage à SCLOG ». La SCLOG, entreprise spécialisée dans le stockage et transport massif de produits pétroliers œuvre depuis quatorze années dans l’humanitaire et dans le social. S’engager dans l’éducation scolaire garantit un apprentissage fondamental pour tous, contribue à une citoyenneté productive, au développement durable, à une croissance inclusive, à l'égalité entre les sexes, à la cohésion nationale, à la paix et à la prospérité, et favorise les progrès vers tous les autres objectifs de développement durable. L’orphelinat Bon Pasteur qui, existe depuis 1966, à Poto-Poto accueille près de cinquante enfants abandonnés y compris des nourrissons dont Antoinette qui a vingt mois d’âge et Espérance qui, est arrivée à la naissance mais totalise actuellement douze mois. La responsable de l’orphelinat Bon Pasteur, la sœur Hélène Ahadji a reçu, pour le compte de ces enfants, sa part de kits scolaires. Cette dernière a prononcé des paroles de bénédictions. « Que le seigneur puisse rendre au centuple à vous et à la société SCLOG », a-t-elle déclaré. Dans ces centres d’accueils, les activités quotidiennes tournent autour des cours scolaires dans un espace improvisé, apprendre à faire la cuisine, le ménage et des jeux. Avec un sens élevé de mère et entouré de ces enfants vulnérables dont-elle embrasse au passage, la directrice générale de la SCLOG, Amandine Sinonin, a questionné la pensionnaire Emeranciele sur sa vocation. Cette dernière a répondu : « j’aime bien les maths ». La sœur Adolphine Louloundadio, une des trois sœurs responsables de l’orphelinat Yamba Nga a également réceptionné un lot de kits scolaires de la société SCLOG pour subvenir aux besoins de la rentrée scolaire de ces enfants. Cette donation est pour elle : « Un signe d’amour et de compassion envers les enfants ». Et d’ajouter : « C’est déjà beaucoup ce que vous avez apporté. A travers ce geste, ils ne se sentiront pas abandonnés ». SLOG investit des millions pour l’éducation des enfants L’engagement sociétal de la SCLOG va au-delà de la mission logistique.C’est ainsi qu’une forte délégation composée de la gestionnaire paie et formation, Albertine Nsiloulou, du secrétaire réceptionniste, Josée Ndza et de la cheffe du personnel, Anne Clarisse Ngouari accompagnait la directrice générale de la SCLOG, Amandine Sinonin, dans les trois sites d’orphelinats pour la séance de remise de don de kits scolaires. Face à la presse, la directrice générale de la SCLOG, Amandine Sinonin, a évoqué la nécessité d’investir dans le secteur éducatif. Dans la ville de Ouesso par exemple, cette entreprise a dégagé d’importantes sommes d’argent pour la construction d’une infrastructure scolaire. Elle a déclaré : « Nous réalisons plusieurs actions sociétales en faveur du bien-être et de l’éducation. Outre les kits scolaires offertes, cette année nous sommes en train de construire des salles de classe d’une école à Ouesso. Chaque année nous soutenons des actions éducatives et l’apprentissage. Plusieurs fois, nous accueillons dans nos locaux des stagiaires. Nous croyons que participer à l’éducation des enfants c’est ce qui leur permettra de bâtir un avenir meilleur pour le Congo ». Dans la ville de Brazzaville comme ailleurs dans les autres cités du monde, la plupart des orphelinats sont gérés par des congrégations religieuses. Par ailleurs, les religieuses n’ont pas les moyens pour faire face aux problèmes de ces enfants vulnérables, mais leur défi majeur consiste à les nourrir, les abriter correctement et surtout de les élever dans le respect d'autrui et la dignité.",
  },
  {
    title: 'Don CFCO 2024',
    type: 'video',
    videos: ['cfco.mp4'],
    description: 'Remise don CFCO 30 avril 2024',
  },
  {
    title: 'Loutété',
    images: ['lou.jpg', 'lou2.jpg','lou3.jpg','lou4.jpg',],
    description: 'Réhabilitation et construction de salles de classe à Loutété, avec latrines et tables-bancs, projet réalisé de 2020 à 2022.',
  },
  {
    title: 'Ouesso',
    images: ['card.png'],
    description: "Réhabilitation d'une école primaire à Ouesso.",
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
      <div className="mt-6 max-w-3xl mx-auto text-center text-gray-700 text-lg rse-text">
        {activeTab.description}
      </div>
    </section>
  );
};

export default EventTabs;
