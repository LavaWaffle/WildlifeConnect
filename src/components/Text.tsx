type TextProps = {
    tex: string;
    author: 'user' | 'assistant';
}

export default function Text({tex: text, author}: TextProps) {
    let bg = 'bg-[#2F3E46]';
    if (author == 'user') bg = 'bg-[#354F52]'
    return (
        <li className={`w-full flex lg:px-[8rem] md:px-[4rem] px-[1rem] py-[0.5rem] items-start ${bg} lg:gap-6 border-b-2 border-black`}>
            <div className="!w-[4rem] h-[4rem] pt-[2rem]">
                <img src={author == 'user' ? 'user.png' : 'bot.png'} alt={author} />
            </div>
            <div className="text-white font-inter font-medium w-[80%] max-w-full overflow-hidden">
                <p className="block break-words p-10">
                    {text}
                </p>
            </div>
        </li>
    )
}