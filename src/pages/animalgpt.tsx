import { useEffect, useRef, useState } from "react";
import Text from "../components/Text";
import ContentEditable from 'react-contenteditable'
import { api } from "@/utils/api";
import { useIsVisible } from "@/hooks/useIsVisible";

function removeTags(str: string) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, ' ');
}

export default function AnimalGpt() {
    const [text, setText] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [messages, setMessages] = useState<{content: string, role: 'assistant' | 'user'}[]>([]);
    const fuckme = api.gpt.msgbot.useMutation();

    const [firstTime, setFirstTime] = useState(true);

    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        if (firstTime && isVisible) setFirstTime(false);
    }, [isVisible])

    function handleTextChange(e: any) {
        setText(e.target.value);
    }

    async function handleSumbit(e: any) {
        e.preventDefault();
        const temp = removeTags(text);
        if (temp == false) return;
        setMessages([...messages, {content: temp, role: 'user'}]);
        setDisabled(true);
        setText("");
        const res = await fuckme.mutateAsync({msg_history: messages, newmsg: temp});
        setDisabled(false);
        setMessages((messages) => [...messages, res.botmsg]);
    }

    useEffect(() => {
        if (messages.length <= 1) return;
        // get content of last message
        
        const lastContent = messages[messages.length -2]?.content ?? ""
        const ele = document.getElementById(lastContent);
        console.log(ele);
        ele?.scrollIntoView();
    }, [messages]);

    return (
        <>
            <section className="w-full">
                <div className="py-10 lg:py-10 px-20 lg:px-0">
                    <div className="blurbBox">
                        <p className="quickBlurb !text-2xl">
                        Encountered a lost or injured animal? Engage with our <span className="boldOrange">innovative chatbot</span> to receive personalized advice on what to do next. Powered by <span className="boldOrange">AI</span>, our chatbot provides real-time assistance, helping you make informed decisions for the well-being of wildlife.
                        </p>
                        <img className="blurbImg !w-[6rem] !h-[6rem]" src="fox.png" alt="handshake" />
                    </div>
                </div>
            </section>
            {/* ANIMAL GPT */}
            <section className="w-full">
                <h1 className="font-inter font-extrabold text-5xl text-center text-white bg-[#2F3E46] py-[2rem] border-b-4 border-black">Animal GPT 1.0</h1>
                <ul className="w-full flex flex-col">
                    <Text author="assistant" tex="Hello there! I'm AnimalGPT, your guide for wildlife situations. If you've come across an animal and you're not sure whether it needs help or should be left alone, I'm here to help you make the right call. Just describe what you're seeing, and I'll provide guidance based on the information you provide. Let's work together!" />
                    {messages.map((message, i) => (
                        <Text key={i} tex={message.content} author={message.role} />
                    ))}
                </ul>
                <div ref={ref}></div>
                
                <form className={`flex items-center justify-center`} onSubmit={handleSumbit}>
                    <div className={`fixed bottom-[2rem] w-[75%] z-50 flex space-btween bg-[#D9D9D9] rounded-3xl overflow-hidden transition-opacity ${isVisible ? "slide-in-from-bottom animate-in opacity-100" : firstTime ? "hidden" : "slide-out-to-bottom animate-out opacity-0"}`}>
                        <ContentEditable disabled={disabled} html={text} onChange={handleTextChange} className="w-[93%] bg-inherit text-[30px] px-[1.5rem] min-h-[4rem] py-[1rem] text-xl focus:outline-none" />
                        {disabled ? 
                            <div role="status" className="flex justify-center items-center">
                            <svg aria-hidden="true" className="w-10 h-10 text-wild-100 animate-spin fill-wild-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                        :<button>
                            <img src="send.png" alt="send" />
                        </button>}
                    </div>
                </form>
            </section>
        </>
    )
}