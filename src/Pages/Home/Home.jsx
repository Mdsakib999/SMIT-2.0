import "./Home.css";

const Home = () => {
    return (
        //         <div
        //             className=" h-screen w-full"
        //             style={{
        //                 backgroundImage: `linear-gradient(
        //      90deg,
        //   hsl(0deg 0% 100%) 62%,
        //   hsl(34deg 98% 80%) 102%,
        //   hsl(39deg 84% 55%) 100%
        //     )`,
        //             }}
        //         >
        //             <h1>This is home.</h1>
        //         </div>
        <div className=" h-screen" style={{ background: 'url("/public/Half Round BG.png") no-repeat center center / cover' }}>
            <h1>This is a div with a background image.</h1>
        </div>

    );
};

export default Home;