
import LatestPropertyItemComponent from "./LatestPropertyItemComponent.tsx";

const LatestPropertyComponent = () => {
    return (
        <div className={"w-full min-h-screen px-10 bg-slate-200"}>
            <div className={"text-center pt-32"}>
                <h2 className={"text-5xl font-roboto font-semibold mb-4 max-[680px]:text-3xl"}>Latest Property</h2>
                <p className={"text-xl max-[680px]:text-lg"}>You can see what people are selling  </p>
            </div>
            <div className={"w-full flex flex-wrap py-10  justify-center"}>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
            </div>
        </div>
    );
};

export default LatestPropertyComponent;