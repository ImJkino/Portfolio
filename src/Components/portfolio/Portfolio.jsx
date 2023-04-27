import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/reports.png";
import IMG2 from "../../assets/consequences.png";
import IMG3 from "../../assets/WeatherApp.png";
import IMG4 from "../../assets/Uber.png";

const Portfolio = () => {
    const data = [{
        id: 1,
        image: IMG1,
        title: 'Immersed: Reports/Events',
        github: 'https://github.com/ImJkino/Immersed',
        demo: 'https://immersed.azurewebsites.net/reports'

    },
    {
        id: 2,
        image: IMG2,
        title: 'Immersed: Conequences',
        github: 'https://github.com/ImJkino/Immersed',
        demo: 'https://immersed.azurewebsites.net/consequences'

    }, 
    {
        id: 3,
        image: IMG3,
        title: 'Weather App: React and Tailwind',
        github: 'https://github.com/ImJkino/Weather_App',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Uber-Like App: React Native and Tailwind',
        github: 'https://github.com/ImJkino/Uber_App',
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7057064715709005825/"
    }
    ]


    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn'>Github</a>
                                    {demo?<a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>: ''}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;
