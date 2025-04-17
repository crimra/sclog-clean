import React, { useEffect } from 'react'
import NewsCard from '../news/NewsCard'
import Hero from '../Hero'
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";

const News = () => {
    useGlobalTitleAnimations();
    const [news, setNews] = React.useState([])
    useEffect(()=>{
        setNews([
            {
                img:'src/assets/news-img.png',
                title:'Lorem ipsum dolor sit amet',
                date:'Mai 18, 2023',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                img:'src/assets/news-img.png',
                title:'Dolor ipsum lorem sit amet',
                date:'Aout 09, 2024',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                img:'src/assets/news-img.png',
                title:'Dolor ipsum dolor sit amet',
                date:'Mai 18, 2023',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                img:'src/assets/news-img.png',
                title:'Sit Amet Ipsum',
                date:'Aout 09, 2024',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                img:'src/assets/news-img.png',
                title:"Lorem Ipsum Dolor",
                date:'Mai 18, 2023',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.'
            },
            {
                img:'src/assets/news-img.png',
                title:'Tempor incididunt ut labore',
                date:'Aout 09, 2024',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.!'
            },
            ])
    }, [])

  return (
    <>
      <Hero />
      <section id='news-section'>

        <h1 className='title2'>News</h1>

        <div className='news-body'>
        {news.map(item => {
            return(
                <NewsCard key={item.title}
                img={item.img} 
                title={item.title}
                date={item.date}
                text={item.text}
                
                />
            )
        })}
        </div>

        </section>
      
    </>
   
  )
}

export default News
