import React from 'react';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainGameCarousel from './mainGameCarousel/mainGameCarousel';
import DayCategory from './dayCategory/dayCategory';
import FromAuthor from './fromAuthor/fromAuthor';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';

function Home() {

    return (
        <div className="Home">
            <Navbar />
            <MainGameCarousel />
            <DayCategory />
            <FromAuthor />
            <MainFooter />
        </div>
    )
}

export default Home
