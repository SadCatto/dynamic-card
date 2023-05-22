import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router"
import { useState } from "react"

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const router = useRouter()
  const [cardNum, setCardNum] = useState('0000 0000 0000 0000')
  const [holderName, setholderName] = useState('JANE APPLESEED')
  const [expMonth, setexpMonth] = useState(null)
  const [expYear, setexpYear] = useState(null)
  const [CVC, setCVC] = useState(null)
  const [cardError, setcardError] = useState(null)
  const [monthError, setMonthError] = useState(null)
  const [CVCError, setCVCError] = useState(null)
  const validation = (ev) => {
    ev.preventDefault()
    let correct = true
    if (cardNum.match("[a-zA-Z]+")) {
      setcardError('Wrong format, numbers only')
      correct = false
    } else {
      setcardError(null)
    }
    if (expMonth == null || expYear == null) {
      setMonthError(`Can't be blank`)
      correct = false
    } else {
      setMonthError(null)
    }
    if (CVC == null) {
      setCVCError(`Can't be blank`)
      correct = false
    } else {
      setCVCError(null)
    }
    if (correct == true) {
      router.push({
        pathname: '/success',
        query: {
          holderName: holderName,
          cardNum: cardNum,
          expMonth: expMonth,
          expYear: expYear,
          cvc: CVC
        }
      }, '/success');
    } else {
      return false
    }
  }
  return (
    <main >
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
            <div className="flex bg-[url('/images/bg-card-back.png')] bg-no-repeat rounded-md">
              <div className="flex justify-end items-center h-[15rem] w-[28rem] pr-14">
                {CVC}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/6 justify-center">
          <form onSubmit={event => validation(event)} className="flex flex-col gap-4 w-full max-w-[60%] ml-12">
            <div className="w-full flex gap-4 flex-col">
              <div className="flex flex-col gap-2">
                <label>CARDHOLDER NAME</label>
                <input className="border-2 rounded-lg p-2" placeholder="e.g. Jane Appleseed" onChange={ev => setholderName(ev.target.value)}></input>
              </div>
              <div className="flex flex-col gap-2">
                <label>CARDNUMBER</label>
                <input className={cardError ? 'border-2 border-rose-500 rounded-lg p-2' : 'border-2 rounded-lg p-2'} placeholder="e.g. 1234 5678 9123 0000" maxLength={19} onChange={ev => setCardNum(ev.target.value)}></input >
                <div className={cardError ? 'text-rose-500 text-xs' : 'hidden'}>
                  {cardError}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 place-content-evenly">
              <div className="flex flex-col gap-2 w-full max-w-[50%]">
                <div>
                  <label>EXP. DATE (MM/YY)</label>
                </div>
                <div className="flex gap-2">
                  <input className={monthError ? 'border-2 border-rose-500 rounded-lg p-2 w-full' : 'border-2 rounded-lg p-2 w-full'} placeholder="MM" onChange={ev => setexpMonth(ev.target.value)}></input>
                  <input className={monthError ? 'border-2 border-rose-500 rounded-lg p-2 w-full' : 'border-2 rounded-lg p-2 w-full'} placeholder="YY" onChange={ev => setexpYear(ev.target.value)}></input>
                </div>
                <div className={monthError ? 'text-rose-500 text-xs' : 'hidden'}>
                  {monthError}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label>CVC</label>
                </div>
                <div className="flex w-full">
                  <input className={CVCError ? 'border-2 border-rose-500 rounded-lg p-2' : 'border-2 rounded-lg p-2'} placeholder="e.g. 123" onChange={ev => setCVC(ev.target.value)}></input>
                </div>
                <div className={CVCError ? 'text-rose-500 text-xs' : 'hidden'}>
                  {CVCError}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <button className="bg-[#21092f] p-2 m-2 text-white rounded-lg w-full">CONFIRM</button>
            </div>
          </form>
        </div>
      </div >
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
        <div className="mt-16">
          <form onSubmit={event => validation(event)} className="flex flex-col gap-4 w-full items-center justify-center p-4">
            <div className="w-full flex gap-4 flex-col">
              <div className="flex flex-col gap-2">
                <label>CARDHOLDER NAME</label>
                <input className="border-2 rounded-lg p-2" placeholder="e.g. Jane Appleseed" onChange={ev => setholderName(ev.target.value)}></input>
              </div>
              <div className="flex flex-col gap-2">
                <label>CARDNUMBER</label>
                <input className={cardError ? 'border-2 border-rose-500 rounded-lg p-2' : 'border-2 rounded-lg p-2'} placeholder="e.g. 1234 5678 9123 0000" maxLength={19} onChange={ev => setCardNum(ev.target.value)}></input >
                <div className={cardError ? 'text-rose-500 text-xs' : 'hidden'}>
                  {cardError}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full items-center ">
              <div className="flex items-start w-full justify-start gap-8">
                <label>EXP. DATE (MM/YY)</label>
                <label>CVC</label>
              </div>
              <div className="flex gap-2">
                <div className="w-full flex gap-2">
                  <input className={monthError ? 'border-2 border-rose-500 rounded-lg p-2 w-[100%]' : 'border-2 rounded-lg p-2 w-[100%] max-w-[80%]'} placeholder="MM" onChange={ev => setexpMonth(ev.target.value)}></input>
                  <input className={monthError ? 'border-2 border-rose-500 rounded-lg p-2 w-[100%]' : 'border-2 rounded-lg p-2 w-[100%] max-w-[80%]'} placeholder="YY" onChange={ev => setexpYear(ev.target.value)}></input>
                </div>
                <div className="w-full">
                  <input className={CVCError ? 'border-2 border-rose-500 rounded-lg w-full p-2' : 'border-2 w-full rounded-lg p-2'} placeholder="e.g. 123" onChange={ev => setCVC(ev.target.value)}></input>
                </div>
              </div>
            </div>
            <div className={CVCError ? 'text-rose-500 text-xs' : 'hidden'}>
              {CVCError}
            </div>
            <div className="flex w-full justify-center">
              <button className="bg-[#21092f] p-2 m-2 text-white rounded-lg w-full">CONFIRM</button>
            </div>
          </form>
        </div>
      </div>
    </main >
  )
}