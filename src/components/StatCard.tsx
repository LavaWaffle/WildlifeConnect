type StatCardProps = {
    title: string;
    desc: JSX.Element;
    imgSrc: string;
}

export default function StatCard({title, desc, imgSrc} : StatCardProps) {
    return (
        <div className="flex flex-col justify-between items-center py-8 px-5 bg-wild-500 rounded-[3rem] w-full h-[35rem]">
            <div className="py-2" />
            <h1 className="font-inter text-7xl font-extrabold text-[#CAD2C5]">{title}</h1>
            <div className="py-2" />
            { desc }
            <div className="py-2" />
            <img src={imgSrc} alt="stat card" />
        </div>
    )
}