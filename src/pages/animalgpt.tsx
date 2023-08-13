export default function AnimalGpt() {
    return (
        <>
            <section className="w-full">
                <div className="py-10 xl:px-[5rem] lg:px-[8rem] px-[7rem]">
                    <div className="bg-wild-200 px-[4rem] py-[2rem] flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-x-8 rounded-3xl">
                        <p className="font-inter text-3xl leading-[3rem] text-center text-white mt-8 lg:mt-0">
                        Encountered a lost or injured animal? Engage with our <span className="text-[#E29E44]">innovative chatbot</span> to receive personalized advice on what to do next. Powered by <span className="text-[#E29E44]">AI</span>, our chatbot provides real-time assistance, helping you make informed decisions for the well-being of wildlife.
                        </p>
                        <img className="w-[10rem]" src="handshake.png" alt="handshake" />
                    </div>
                </div>
            </section>
        </>
    )
}