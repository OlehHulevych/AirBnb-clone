import PropertyCardItem from "./PropertyCardItem.tsx";


const arrayOfTypes = [
    {
        id:0,
        name:"Sell your house",
        photo:"Selling.png",
        subtext:"Stunning home for sale! Spacious, modern, and move-in ready—perfect for families or investors. Don’t miss out—schedule a viewing today!"
    },
    {
        id:1,
        name:"Rent your Home",
        photo:"Renting.png",
        subtext:"Your perfect rental home awaits! Stylish, comfortable, and in a great location. Schedule a viewing today!"
    },
    {
        id:2,
        name:"Buy House",
        photo:"Buying.png",
        subtext: "Your new home is waiting! Spacious, stylish, and in a great location. Contact us today for a viewing!"
    },
    {
        id:3,
        name:"Free Marketing",
        photo:"Free_marketing.png",
        subtext: "Get the exposure your business deserves—free marketing that works! Boost your reach today!"
    }
]

const PropertiecByClassification = () => {
    return (
        <div className={"w-full min-h-auto bg-slate-300"}>
            <div className={"text-center pt-12"}>
                <div className={"text-4xl font-semibold mb-4 max-[430px]:text-2xl"}>Property for any type of owning</div>
                <p className={"text-2xl max-[430px]:text-xl"}>Choose your property for any type of owning. That`s easy and favorably</p>
            </div>
            <div className={"w-full px-10 py-10 flex flex-wrap justify-center  "}>
                {arrayOfTypes?.map(type=>(
                    <PropertyCardItem key={type.id} name={type.name} subtext={type.subtext} photo={type.photo}/>
                ))}
               
            </div>
        </div>
    );
};

export default PropertiecByClassification;