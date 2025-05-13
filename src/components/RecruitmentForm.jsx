import React, { useState } from "react";

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    maritalStatus: "",
    email: "",
    phone: "",
    address: "",
    diploma: "",
    school: "",
    gradYear: "",
    lastJob: "",
    company: "",
    jobDuration: "",
    jobDescription: "",
    positionWanted: "",
    contractType: "",
    availability: "",
    languages: [],
    hasLicense: "",
    resume: null,
    motivation: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox" && name === "languages") {
      const updated = formData.languages.includes(value)
        ? formData.languages.filter((lang) => lang !== value)
        : [...formData.languages, value];
      return setFormData({ ...formData, languages: updated });
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Form submission:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl space-y-6"
    >
      <h1 className="text-2xl font-bold text-[#1F458E]">Formulaire de candidature</h1><br /><br />

      {/* Infos personnelles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Nom & Prénom</label>
          <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Date de naissance</label>
          <input type="date" name="birthDate" required value={formData.birthDate} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Statut matrimonial</label>
          <select name="maritalStatus" required value={formData.maritalStatus} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">-- Sélectionner --</option>
            <option value="Célibataire">Célibataire</option>
            <option value="Marié(e)">Marié(e)</option>
            <option value="Divorcé(e)">Divorcé(e)</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Téléphone</label>
          <input type="tel" name="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Adresse</label>
          <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
      </div>

      {/* Études */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Dernières études</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" name="diploma" placeholder="Diplôme" value={formData.diploma} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="school" placeholder="Établissement" value={formData.school} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="gradYear" placeholder="Année" value={formData.gradYear} onChange={handleChange} className="p-2 border rounded" />
        </div>
      </div>

      {/* Expérience pro */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Dernière expérience professionnelle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="lastJob" placeholder="Poste" value={formData.lastJob} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="company" placeholder="Entreprise" value={formData.company} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="jobDuration" placeholder="Durée" value={formData.jobDuration} onChange={handleChange} className="p-2 border rounded" />
        </div>
        <textarea
          name="jobDescription"
          placeholder="Fonctions principales"
          value={formData.jobDescription}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
      </div>

      {/* Poste et contrat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label>Poste recherché</label>
          <select name="positionWanted" required value={formData.positionWanted} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">-- Sélectionner --</option>
            <option value="Chauffeur">Chauffeur</option>
            <option value="Logisticien">Logisticien</option>
            <option value="QHSE Assistant">QHSE Assistant</option>
            <option value="Administratif">Administratif</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div>
          <label>Type de contrat</label>
          <select name="contractType" value={formData.contractType} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">-- Sélectionner --</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="Stage">Stage</option>
          </select>
        </div>
        <div>
          <label>Disponibilité</label>
          <select name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">-- Sélectionner --</option>
            <option value="Immédiate">Immédiate</option>
            <option value="1 mois">1 mois</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Langues */}
      <div>
        <h3 className="font-semibold text-lg">Langues parlées</h3>
        <div className="flex gap-4 flex-wrap">
          {["Français", "Anglais", "Autre"].map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="languages"
                value={lang}
                checked={formData.languages.includes(lang)}
                onChange={handleChange}
              />
              {lang}
            </label>
          ))}
        </div>
      </div>

      {/* Permis */}
      <div>
        <label>Avez-vous un permis de conduire ?</label>
        <select name="hasLicense" value={formData.hasLicense} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">-- Sélectionner --</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
      </div>

      {/* CV */}
      <div>
        <label>CV (PDF)</label>
        <input type="file" name="resume" accept=".pdf" onChange={handleChange} className="w-full download rounded" required aria-label="CV (PDF)" />
      </div>

      {/* Motivation */}
      <div>
        <label>Lettre de motivation (optionnelle)</label>
        <textarea
          name="motivation"
          rows="4"
          placeholder="Motivation"
          value={formData.motivation}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      {/* RGPD */}
      <div className="flex items-start gap-2">
        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
        <label className="text-sm">
          J'accepte que mes données soient utilisées dans le cadre de ce recrutement.
        </label>
      </div>

      <button type="submit" className="bg-[#1F458E] text-white px-6 py-2 rounded hover:bg-[#173779] transition w-full md:w-auto">
        📨 Envoyer ma candidature
      </button>
    </form>
  );
};

export default RecruitmentForm;
