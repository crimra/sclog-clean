import React, { useEffect } from 'react'
import NewsCard from '../news/NewsCard'

const News = () => {

    const [news, setNews] = React.useState([])
    useEffect(()=>{
        setNews([
            {
                img:'src/assets/news-img.png',
                title:'Bani ke coder na minuit',
                date:'Mai 18, 2023',
                text: 'Ba mboutu hein ? Ba mboutu mu ke safula ngé figure na mbata. Mu tchumuna ngé dissu!'
            },
            {
                img:'src/assets/news-img.png',
                title:'Ni Beto',
                date:'Aout 09, 2024',
                text: 'Ba mboutu hein ? Ba mboutu mu ke safula ngé figure na mbata. Mu tchumuna ngé dissu!'
            },
            {
                img:'src/assets/news-img.png',
                title:'Ba mbala me ya',
                date:'Mai 18, 2023',
                text: 'Ba mboutu hein ? Ba mboutu mu ke safula ngé figure na mbata. Mu tchumuna ngé dissu!'
            },
            {
                img:'src/assets/news-img.png',
                title:'Himra ke ka zoba',
                date:'Aout 09, 2024',
                text: 'Ba mboutu hein ? Ba mboutu mu ke safula ngé figure na mbata. Mu tchumuna ngé dissu!'
            },
            {
                img:'src/assets/news-img.png',
                title:"L'homme est beau",
                date:'Mai 18, 2023',
                text: 'Ba mboutu hein ? Ba mboutu mu ke safula ngé figure na mbata. Mu tchumuna ngé dissu!'
            },
            {
                img:'src/assets/news-img.png',
                title:'Jonny Ha liiiiii déeee',
                date:'Aout 09, 2024',
                text: 'Ba mboutu hein ? Ba mboutu mu ke safula ngé figure na mbata. Mu tchumuna ngé dissu!'
            },
            ])
    }, [])

  return (
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
  )
}

export default News
