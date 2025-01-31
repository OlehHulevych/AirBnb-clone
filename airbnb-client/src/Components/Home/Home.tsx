

const Home = () => {
    return (
        <main style={{ backgroundImage: `url('./assets/Home-bg.png')` }}  className={"bg-[url('/assets/Home-pg.png')] bg-cover bg-center  w-full min-h-screen flex justify-center  items-center "}>
            <div className={"text-center text-white w-1/2"}>
                <h1 className={"text-7xl text-white font-roboto capitalize font-semibold mb-4"}>Find your dream home</h1>
                <p className={"text-2xl"}>Discover Your Ideal Rental Property – Browse a Wide Range of Options, Compare Prices, and Secure Your Next Home with Ease. Find the Perfect Place for Your Lifestyle Today!</p>
            </div>
        </main>
    );
};

export default Home;