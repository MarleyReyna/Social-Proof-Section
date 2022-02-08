import React from 'react';
import './Main.scss';
import custTestimonials from './Info';
import starIcon from './Images/icon-star.svg';


const Main = () => {

    const Stars = [
        {  
            class: 'review',
            text: 'Rated 5 Stars in Reviews'
        },
        {  
            class: 'guru',
            text: 'Rated 5 Stars in Report Guru'
        },
        {  
            class: 'best-tech',
            text: 'Rated 5 Stars in BestTech'
        },
    ]

    let starsMult = []

    for (let i = 0; i < 5; i++){
        starsMult.push(<img src={starIcon} alt='' aria-hidden='true'/>)
    }

    return (
        <main>
            <section className='top-section'>
                <div className='text-box'>
                    <h1>
                        10,000+ of our users love our 
                        products.
                    </h1>
                    <p>
                        We only provide great products 
                        combined with excellent customer 
                        service. See what our satisfied 
                        customers are saying about our 
                        services.
                    </p>
                </div>
                <div className='stars'>
                    <ul>
                        {Stars.map((item, index) => {
                            return(
                                <li className={item.class}
                                key={index}>
                                    <div>
                                        {starsMult}
                                    </div>
                                    <p>{item.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <section className='testimonials'>
                <ul>
                    {custTestimonials.map((item, index) =>{
                        return(
                            <li className={item.class}
                            key='index'>
                                <div>
                                    <img src={item.image} alt='' aria-hidden='true'/>
                                    <h2>
                                        {item.name}
                                        <span> <br />Verified Buyer</span>
                                    </h2>
                                </div>
                                <p>
                                    {item.review}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    );
}
 
export default Main;