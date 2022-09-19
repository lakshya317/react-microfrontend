import React from 'react';
import React_TS from '../../assets/images/React_Typescript_Logo.png';
import 'animate.css/animate.min.css';
import './ScrollPage.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import cartoonsData from '../../assets/data/cartoons.json';
import CartoonCard from '../CartoonCard/CartoonCard';

interface cartoonType {
    id: number;
    title: string;
    year: number;
    genre: Array<string>;
    image: string;
}

const cartoons: Array<cartoonType> = cartoonsData.map((cartoon) => {
    return {
        id: cartoon.id,
        title: cartoon.title,
        year: cartoon.year,
        genre: cartoon.genre,
        image: cartoon.image
    };
});

const animations_in = ['animate__fadeInRight', 'animate__fadeInLeft'];

const ScrollPage: React.FC<{}> = () => {
    return (
        <div className="main-container" id="scroll-parent">
            <div className="body-title-container">
                <img src={React_TS} alt="React Typescript" className="react-ts-logo" />
                <h1 className="body-title">Welcome to a React App made using TypeScript</h1>
            </div>
            <h2 className="body-title cartoon-body-header">My Favourite Cartoons:</h2>
            <div className="cartoon-cards">
                {cartoons.map((cartoon) => {
                    return (
                        <AnimationOnScroll
                            key={cartoon.id}
                            offset={50}
                            animateIn={animations_in[cartoon.id % 2]}
                            animateOut={'animate__fadeOut'}
                            duration={0.6}
                            scrollableParentSelector="#scroll-parent"
                        >
                            <CartoonCard cartoon={cartoon} />
                        </AnimationOnScroll>
                    );
                })}
            </div>
        </div>
    );
};

export default ScrollPage;
