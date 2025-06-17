// import { Button } from 'bootstrap'
import { useState, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import '../Chatbot.css'
import { FaUser, FaPaperPlane, FaRobot, FaToggleOn, FaToggleOff } from 'react-icons/fa'
// import { ChatResponse } from './ChatResponse';
import { GoogleGenAI } from '@google/genai'
// import {GoogleGenerativeAI} from '@google/generative-ai'




const Chatbot = () => {

    const ai = new GoogleGenAI({ apiKey: 'apikey' });
    // create a use reference always point to bottom auto-scroll







    const [input, setInput] = useState('');
    const [count,setCount]=useState('0');
    const [message, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setActive] = useState(false)
    // bot reply either direct api call to gemini or node/python server
    const limit=2;
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ Behavior: 'smooth' });
    }, [message]);


    const getBotReply = async (userMessage) => {
        setIsLoading(true)
        // return new Promise((resolve)=>
        // {
        //     setTimeout(()=>{
        //         setIsLoading(false);
        //         resolve(`you said:"${userMessage}" . I am a bot!`);
        //     },1500)
        // })


        try {

            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: userMessage,
            });
            setIsLoading(false)
            return response.text;
        }
        catch (error) {
            console.log('api error');
            setIsLoading(false)
            return 'connection error';

        }


    }

    const handleToogle = () => {
        setActive((prev) => !prev);
    }

    const handleSend = async () => {
        setCount((count)=>count+1);
        console.log(count);
        if (!input.trim() ) 
            {
                alert('you reached the limit');
                setInput('')
                return
            }
        const newUserMsg =
        {
            type: 'user',
            text: input
        };
        setMessages((prev) => [...prev, newUserMsg]);
        setInput('');

        const botReply = await getBotReply(input);
        const newBotMsg = {
            type: 'bot',
            text: botReply
        }

        setMessages((prev) => [...prev, newBotMsg]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSend();
    }

    return (
        <div className='container d-flex justify-content-center align-items-center ' >
            {/* <Card className='col-md-9 col-lg-5 bg-secondary'> */}

            <Card className={`col-md-9 col-lg-5 ${isActive ? 'bg-secondary' : 'bg-transparent'}`}
                //  style={{marginTop:'10px',height:'50vh'}}
                style={{ marginTop: '20px', height: '80vh', display: 'flex', flexDirection: 'column', borderRadius: '1rem' }}
            >

                <div className='header p-2  bg-dark d-flex flex-row ' >
                    {/* <div className='chat-Icon '> */}
                    <h1 className='fw-bold text-primary '>Chat-Bot
                    </h1>
                    <button className={` px-2 ${isActive ? 'btn btn-secondary' : 'btn btn-primary'}`} onClick={handleToogle} style={{ borderRadius: '10px' }}>{
                        isActive ? (<FaToggleOn />) : (<FaToggleOff />)}</button>
                    {/* <div className='fw-bold text-primary '>Chat-Bot</div>
                    <button>toogle</button> */}
                </div>

                <div className='body p-4' style={{ flex: '1', overflowY: 'auto' }}>


                    {
                        message.map((msg, index) =>
                            msg.type === 'bot' ?
                                (
                                    <div className='modal-chat'>
                                        <div className='modal-icon'><FaRobot className='robot-icon' /></div>
                                        <div className='modal-text'>
                                            {msg.text}
                                        </div>
                                        <br></br>
                                    </div>

                                ) : (
                                    <div className='user-chat'>
                                        <div className='user-text'>

                                            {msg.text}

                                        </div>
                                        <div className='User-icon'>
                                            <FaUser className='user-icon' />
                                        </div>

                                    </div>
                                )

                        )
                    }


                    {/* user field */}
                    {isLoading && (

                        <div className='modal-chat'>
                            <div className='modal-icon'><FaRobot className='robot-icon' /></div>
                            <div className='modal-text'>
                                Thinking...
                            </div>
                        </div>

                    )

                    };
                    <div ref={bottomRef}>

                    {/* scroll to latest response */}
                    </div>
                </div>




                <div className='footer p-3 ' >
                    <div className='text-input w-100 d-flex flex-row'>
                        <input
                            type='text'
                            placeholder='write your query...'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            
                            onKeyDown={handleKeyDown}

                        />

                        <button className="send-button" onClick={handleSend}>
                            <FaPaperPlane className='send' />
                        </button>


                    </div>

                </div>


            </Card>


        </div>
    )
}

export default Chatbot