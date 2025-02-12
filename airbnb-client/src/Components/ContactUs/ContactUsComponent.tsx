

const ContactUsComponent = () => {
    return (
        <div style = {{backgroundImage:`url("./bg/contact_us.png")`}} className={"w-full h-auto bg-url('./bg/contact_us.png) bg-no-repeat bg-cover bg-center pb-12"}>
            <div className={"text-center pt-32 text-white"}>
                <h2 className={"text-5xl font-roboto  font-semibold mb-4 max-[680px]:text-3xl max-[360px]:text-2xl"}>Find best place for living</h2>
                <p className={"my-0 mx-auto w-3/6 text-center text-xl max-[680px]:text-lg break-words mb-6 max-[768px]:w-2/3 max-[360px]:text-base"}>Spend vacations in best hotels and resorts find the great place of your
                    choice using different searching options</p>
                <button className={"capitalize px-8 py-3 border-white border-solid border-2 cursor-pointer rounded-lg text-white text-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out"}>Contact us</button>
            </div>
        </div>
    );
};

export default ContactUsComponent;