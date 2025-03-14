import {UserMenu} from '../UserMenu/UserMenu'

const Home = () => {
    return (
        <>
        <main style={{ backgroundImage: `url('./assets/Home-bg.png')` }}  className={"bg-[url('/assets/Home-pg.png')] bg-cover bg-center  w-full min-h-screen flex justify-center  items-center pb-5  "}>
            <div className={"text-center text-white w-1/2 max-[620px]:w-5/6 max-[700px]:items-center max-h-32"}>
                <h1 className={"text-7xl text-white font-roboto capitalize font-semibold mb-4 max-[950px]:text-4xl"}>Find your dream home</h1>
                <p className={"text-2xl max-[768px]:text-xl"}>Discover Your Ideal Rental Property – Browse a Wide Range of Options, Compare Prices, and Secure Your Next Home with Ease. Find the Perfect Place for Your Lifestyle Today!</p>
            </div>
        </main>
        <UserMenu/>
        </>
    );
};

export default Home;