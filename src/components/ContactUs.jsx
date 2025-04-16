import React from 'react'

const ContactUs = () => {
  return (
    <section className='contact-us'>
        <div className="flex flex-col">
            <p className='title2'>Prennez contact</p>
            <p className=''>Vous avez un projet en tête ? <br />Nous serions ravis d'en discuter avec vous.</p>
        </div>
        <div className=''>
            <form action="" className='flex flex-col gap-2'>
                <div className='input-box'>
                    <label htmlFor="name">Nom:</label>
                    <input type="text" />
                </div>
                <div className='input-box'>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                </div>
                <div className='input-box'>
                    <textarea type="text" placeholder='Votre message' rows={4} />
                </div>
                <button className='w-32 bg-[#1F458E] rounded-lg text-white'>Envoyer</button>
            </form>
        </div>
    </section>
  )
}

export default ContactUs
