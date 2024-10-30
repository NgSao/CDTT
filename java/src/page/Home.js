import React from 'react'
import HomeHotDeal from './../components/home/HomeHotDeal';
import HomeNew from '../components/home/HomeNew';
import HomeTopSelling from './../components/home/HomeTopSelling';
import HomeProductCategory from '../components/home/HomeProductCategory';
import Blog from '../components/blog/Blog';
import HomeCategoryProduct from '../components/home/HomeCategoryProduct';
import BannerItem from './../components/banner/BannerItem';

function Home(props) {
    return (
        <div >
            <BannerItem />
            <div className="container mx-auto overflow-hidden">
                <HomeHotDeal />
                <HomeNew />
                <div className='flex flex-row justify-around'>
                    <img src='https://file.hstatic.net/200000722513/file/banner_790x250_tai_nghe_6f6dcb17d3a54fcc88b3de96762d2d41.jpg' />
                    <img src='https://file.hstatic.net/200000722513/file/banner_790x250_tai_nghe_6f6dcb17d3a54fcc88b3de96762d2d41.jpg' />
                </div>

                <HomeTopSelling />
                <div className='flex flex-row justify-around'>
                    <img src='https://minhtuanmobile.com/uploads/slide/apple-watch-240831050833.png' />
                    <img src='https://minhtuanmobile.com/uploads/slide/macbook-air-240831050814.png' />
                </div>
                <HomeProductCategory />
                <HomeCategoryProduct />
                <Blog />

            </div>


        </div>
    )
}

export default Home
