import { useState } from "react";
import Text from "../components/Text";
import ContentEditable from 'react-contenteditable'
import { api } from "@/utils/api";

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

    return (
        <>
            <section className="w-full">
                <div className="py-10 lg:py-10 px-20 lg:px-0">
                    <div className="blurbBox">
                        <p className="quickBlurb !text-2xl">
                        Encountered a lost or injured animal? Engage with our <span className="text-[#E29E44]">innovative chatbot</span> to receive personalized advice on what to do next. Powered by <span className="text-[#E29E44]">AI</span>, our chatbot provides real-time assistance, helping you make informed decisions for the well-being of wildlife.
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
                
                <form className="flex items-center justify-center" onSubmit={handleSumbit}>
                    <div className="fixed bottom-[2rem] w-[75%] z-50 flex space-btween bg-[#D9D9D9] rounded-3xl overflow-hidden">
                        <ContentEditable disabled={disabled} html={text} onChange={handleTextChange} className="w-[93%] bg-inherit text-[30px] px-[1.5rem] min-h-[4rem] py-[1rem] text-xl focus:outline-none" />
                        <button>
                            <img src="send.png" alt="send" />
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}