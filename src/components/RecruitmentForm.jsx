import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const RecruitmentForm = () => {
  const { t } = useTranslation();
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

  const [submitStatus, setSubmitStatus] = useState({ status: '', message: '' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ status: 'loading', message: t('recruitment.sending') });

    try {
      const form = new FormData();
      // Ajouter toutes les données du formulaire
      Object.keys(formData).forEach(key => {
        if (key === 'languages') {
          form.append(key, formData[key].join(', '));
        } else if (key === 'resume' && formData[key]) {
          form.append(key, formData[key]);
        } else if (key !== 'resume') {
          form.append(key, formData[key]);
        }
      });

      const response = await fetch('http://localhost:3000/api/applications', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setSubmitStatus({ status: 'success', message: t('recruitment.success') });
        // Réinitialiser le formulaire
        setFormData({
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
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ status: 'error', message: t('recruitment.error') });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl space-y-6"
      encType="multipart/form-data"
    >
      <h1 className="text-2xl font-bold text-[#1F458E]">{t('recruitment.title')}</h1><br /><br />

      {/* Infos personnelles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>{t('recruitment.fullname')}</label>
          <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>{t('recruitment.birthdate')}</label>
          <input type="date" name="birthDate" required value={formData.birthDate} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>{t('recruitment.maritalStatus')}</label>
          <select name="maritalStatus" required value={formData.maritalStatus} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="select">{t('recruitment.maritalStatusOptions.select')}</option>
            <option value="single">{t('recruitment.maritalStatusOptions.single')}</option>
            <option value="married">{t('recruitment.maritalStatusOptions.married')}</option>
            <option value="divorced">{t('recruitment.maritalStatusOptions.divorced')}</option>
          </select>
        </div>
        <div>
          <label>{t('recruitment.email')}</label>
          <input type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>{t('recruitment.phone')}</label>
          <input type="tel" name="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>{t('recruitment.address')}</label>
          <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
      </div>

      {/* Études */}
      <div>
        <h3 className="font-semibold text-lg mb-2">{t('recruitment.studies')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" name="diploma" placeholder={t('recruitment.diploma')} value={formData.diploma} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="school" placeholder={t('recruitment.school')} value={formData.school} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="gradYear" placeholder={t('recruitment.gradYear')} value={formData.gradYear} onChange={handleChange} className="p-2 border rounded" />
        </div>
      </div>

      {/* Expérience pro */}
      <div>
        <h3 className="font-semibold text-lg mb-2">{t('recruitment.experience')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="lastJob" placeholder={t('recruitment.lastJob')} value={formData.lastJob} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="company" placeholder={t('recruitment.company')} value={formData.company} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="jobDuration" placeholder={t('recruitment.jobDuration')} value={formData.jobDuration} onChange={handleChange} className="p-2 border rounded" />
        </div>
        <textarea
          name="jobDescription"
          placeholder={t('recruitment.jobDescription')}
          value={formData.jobDescription}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded"
        />
      </div>

      {/* Poste et contrat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select name="positionWanted" required value={formData.positionWanted} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="select">{t('recruitment.positionOptions.select')}</option>
          <option value="operator">{t('recruitment.positionOptions.operator')}</option>
          <option value="maintenance">{t('recruitment.positionOptions.maintenance')}</option>
          <option value="hse">{t('recruitment.positionOptions.hse')}</option>
          <option value="accountant">{t('recruitment.positionOptions.accountant')}</option>
          <option value="buyer">{t('recruitment.positionOptions.buyer')}</option>
          <option value="it">{t('recruitment.positionOptions.it')}</option>
          <option value="secretary">{t('recruitment.positionOptions.secretary')}</option>
          <option value="tax">{t('recruitment.positionOptions.tax')}</option>
          <option value="treasurer">{t('recruitment.positionOptions.treasurer')}</option>
        </select>

        <div>
          <label>{t('recruitment.contractType')}</label>
          <select name="contractType" value={formData.contractType} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="select">{t('recruitment.contractTypeOptions.select')}</option>
            <option value="cdi">{t('recruitment.contractTypeOptions.cdi')}</option>
            <option value="cdd">{t('recruitment.contractTypeOptions.cdd')}</option>
            <option value="intern">{t('recruitment.contractTypeOptions.intern')}</option>
          </select>
        </div>
        <div>
          <label>{t('recruitment.availability')}</label>
          <select name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="select">{t('recruitment.availabilityOptions.select')}</option>
            <option value="immediate">{t('recruitment.availabilityOptions.immediate')}</option>
            <option value="1month">{t('recruitment.availabilityOptions.1month')}</option>
            <option value="other">{t('recruitment.availabilityOptions.other')}</option>
          </select>
        </div>
      </div>

      {/* Langues */}
      <div>
        <h3 className="font-semibold text-lg">{t('recruitment.languages')}</h3>
        <div className="flex gap-4 flex-wrap">
          {["fr", "en", "other"].map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="languages"
                value={t(`recruitment.languagesOptions.${lang}`)}
                checked={formData.languages.includes(t(`recruitment.languagesOptions.${lang}`))}
                onChange={handleChange}
              />
              {t(`recruitment.languagesOptions.${lang}`)}
            </label>
          ))}
        </div>
      </div>

      {/* Permis */}
      <div>
        <label>{t('recruitment.hasLicense')}</label>
        <select name="hasLicense" value={formData.hasLicense} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="select">{t('recruitment.hasLicenseOptions.select')}</option>
          <option value="yes">{t('recruitment.hasLicenseOptions.yes')}</option>
          <option value="no">{t('recruitment.hasLicenseOptions.no')}</option>
        </select>
      </div>

      {/* CV */}
      <div>
        <label>{t('recruitment.resume')}</label>
        <input type="file" name="resume" accept=".pdf" onChange={handleChange} className="w-full download rounded" required aria-label={t('recruitment.resume')} />
      </div>

      {/* Motivation */}
      <div>
        <label>{t('recruitment.motivation')}</label>
        <textarea
          name="motivation"
          rows="4"
          placeholder={t('recruitment.motivationPlaceholder')}
          value={formData.motivation}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      {/* RGPD */}
      <div className="flex items-start gap-2">
        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
        <label className="text-sm">
          {t('recruitment.consent')}
        </label>
      </div>

      {submitStatus.message && (
        <div className={`message ${submitStatus.status} p-4 rounded ${
          submitStatus.status === 'success' ? 'bg-green-100 text-green-700' : 
          submitStatus.status === 'error' ? 'bg-red-100 text-red-700' : 
          'bg-blue-100 text-blue-700'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <button 
        type="submit" 
        className="bg-[#1F458E] text-white px-6 py-2 rounded hover:bg-[#173779] transition w-full md:w-auto"
        disabled={submitStatus.status === 'loading'}
      >
        {submitStatus.status === 'loading' ? t('recruitment.sending') : t('recruitment.submit')}
      </button>
    </form>
  );
};

export default RecruitmentForm;
