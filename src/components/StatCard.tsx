import { useIsVisible } from "@/hooks/useIsVisible";
import { useEffect, useRef, useState } from "react";
import { Ticker } from "react-flip-ticker";
import { set } from "zod";

type StatCardProps = {
    title: string;
    desc: JSX.Element;
    imgSrc: string;
}

export default function StatCard({title, desc, imgSrc} : StatCardProps) {
    const [loaded, setLoaded] = useState(false);

    const startValue = title == "20,000" ? "00,000" : "00%";

    const [value, setValue] = useState(startValue);

    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        setLoaded(true);
    }, [])

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                if (title == "20,000") {
                    setValue("19,999");
                } else if (title == "80%") {
                    setValue("79%");
                } else {
                    setValue("36%")
                }
            }, 1000)
            setTimeout(() => {
                setValue(title);
            }, 1500);
        }
    }, [isVisible])
    return (
        <div className="flex flex-col justify-between items-center py-8 px-5 bg-wild-500 rounded-[3rem] w-full h-[35rem]">
            <div className="py-2" />
            <div>
            {loaded && <Ticker duration="1s" textClassName={"font-inter text-7xl font-extrabold text-[#CAD2C5] flex flex-row"}>{value}</Ticker>}
            </div>
            {/* <h1 className="font-inter text-7xl font-extrabold text-[#CAD2C5]">{title}</h1> */}
            <div ref={ref} className="py-2" />
            { desc }
            <div className="py-2" />
            <img src={imgSrc} alt="stat card" />
        </div>
    )
}