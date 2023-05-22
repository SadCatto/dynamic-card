/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import { useState, useEffect } from "react"


export default function Success(props) {
    const [cardNum, setCardNum] = useState('0000 0000 0000 0000')
    const [holderName, setholderName] = useState('JANE APPLESEED')
    const [expMonth, setexpMonth] = useState(null)
    const [expYear, setexpYear] = useState(null)
    const [CVC, setCVC] = useState(null)
    const router = useRouter()
    useEffect(() => {
        setholderName(router.query.holderName);
        setCardNum(router.query.cardNum);
        setexpMonth(router.query.expMonth);
        setexpYear(router.query.expYear);
        setCVC(router.query.cvc);
    }, [router]);

    const home = () => {
        router.push('/')
    }
    return (
        <main>
            <div className="hidden lg:flex lg:flex-row lg:place-content-evenly lg:h-screen lg:w-screen lg:bg-[url('/images/bg-main-desktop.png')] lg:bg-no-repeat">
                <div className="flex flex-col justify-center items-center gap-8 w-3/6">
                    <div className="rounded-md h-2.5/6 w-max bg-no-repeat flex align-start">
                        <div className="bg-[url('/images/bg-card-front.png')] bg-no-repeat flex flex-col h-[15.5rem] w-[28rem] place-content-evenly items-start pl-8 pr-8">
                            <img src="/images/card-logo.svg" alt="logo" className="h-fit w-fit"></img>
                            <div className="flex flex-col gap-7 w-full">
                                <div className="w-full text-center text-[24px] text-white tracking-[0.25em]">
                                    {cardNum}
                                </div>
                                <div className="flex items-start place-content-between w-full text-[12px] text-white tracking-[0.25em]">
                                    <div>
                                        {holderName}
                                    </div>
                                    <div>
                                        {expMonth || '00'} /{expYear || '00'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[80%] flex justify-end">
                        <div className="flex bg-[url('/images/bg-card-back.png')] rounded-md">
                            <div className="flex justify-end items-center h-[15rem] w-[28rem] pr-14">
                                {CVC}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center w-3/6">
                    <div className="w-full max-w-[60%] flex flex-col gap-4 items-center">
                        <div>
                            <img src="/images/icon-complete.svg" alt="complete thumbs up" className="h-fit w-fit"></img>
                        </div>
                        <div></div>
                        <div className="text-3xl tracking-widest">
                            <h1>THANK YOU!</h1>
                        </div>
                        <div className="text-lg text-[#8e8593]">
                            <h2>We've added your card details</h2>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button className="bg-[#21092f] p-2 text-white font-thin rounded-lg w-5/6" onClick={home}>Continue</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* Mobile Part  */}
            <div className="flex flex-col gap-2 items-center justify-center lg:hidden">
                <div className="bg-[url('/images/bg-main-mobile.png')] h-[14rem] w-full p-4 flex flex-col items-end justify-center bg-no-repeat bg-cover">
                    <div className="bg-[url('/images/bg-card-back.png')] w-full max-w-[80%] h-[9.5rem] bg-no-repeat bg-contain z-0 relative flex items-center">
                        <div className="text-sm w-full max-w-[90%] h-[15%] flex justify-end text-white items-center pr-2 pb-1">
                            {CVC || '000'}
                        </div>
                    </div>
                    <div className="w-full z-10 absolute pt-44 flex justify-center">
                        <div className="bg-[url('/images/bg-card-front.png')] w-full max-w-[80%] h-[9.5rem] bg-no-repeat bg-contain z-10 flex flex-col place-content-between p-4">
                            <div className="bg-[url('/images/card-logo.svg')] w-[20%] h-[2rem] bg-contain bg-no-repeat"></div>
                            <div className="flex flex-col w-full max-w-[92%]  text-sm gap-4 pl-2 pr-2">
                                <div className="w-full text-center text-white tracking-[0.15em]">
                                    {cardNum}
                                </div>
                                <div className="flex items-start place-content-between w-full text-white tracking-[0.15em]">
                                    <div className="text-xs">
                                        {holderName}
                                    </div>
                                    <div className="text-xs">
                                        {expMonth || '00'} /{expYear || '00'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center w-full pt-24">
                    <div className="w-full flex flex-col gap-4 items-center">
                        <div>
                            <img src="/images/icon-complete.svg" alt="complete thumbs up" className="h-fit w-fit"></img>
                        </div>
                        <div></div>
                        <div className="text-3xl tracking-widest">
                            <h1>THANK YOU!</h1>
                        </div>
                        <div className="text-lg text-[#8e8593]">
                            <h2>We've added your card details</h2>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button className="bg-[#21092f] p-2 text-white font-thin rounded-lg w-5/6" onClick={home}>Continue</button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}