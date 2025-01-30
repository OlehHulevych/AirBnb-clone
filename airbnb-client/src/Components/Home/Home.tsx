import React from 'react';

const Home = () => {
    return (
        <main style={{ backgroundImage: `url('./assets/Home-bg.png')` }}  className={"bg-[url('/assets/Home-pg.png')] bg-cover bg-center  w-full min-h-screen flex justify-center  items-center"}>
            <div className={"text-center"}>
                <h1 className={"text-5xl text-white font-roboto capitalize font-semibold"}>Find your dream home</h1>
            </div>
        </main>
    );
};

export default Home;