import React, {useRef, useEffect, useState} from 'react'

type Props = {}

const Mintnftpage = (props: Props) => {

  // const form = useRef();


  // // const sendEmail = async(e) => {
  // //   e.preventDefault();
  // //   console.log(form.current)

  // //   emailjs.sendForm("service_s22eq14", "template_1ar5q4a", form.current, "Cz55Jg65l961cPNcN")
  // //     .then((result) => {
  // //         console.log(result.text);
  // //     }, (error) => {
  // //         console.log(error.text);
  // //     });
  // // };

  // let state = {
  //   text: "",
  // };

  // // typing on RIGHT hand side of =
  // let onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //   this.setState({ text: e.currentTarget.value });
  // };

  

  return (
    <div>
        <div className='bg-[#324265] w-full m-1 py-3 px-2 rounded-md min-h-screen'>
        {/* <form className='w-full' ref={form} onSubmit={sendEmail}> */}
        <form className='w-full'>
  <label className="block">
    <span className="block font-medium text-[#ABAEB0] text-xl mb-2">NFT Collection Name</span>
    <input type="email" className='peer w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your name'/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
  <label className="block">
    <span className="block font-medium text-[#ABAEB0] text-xl mb-2">Your Symbol</span>
    <input type="email" className='peer w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your email'/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>

  <label className="block">
    <span className="block font-medium text-[#ABAEB0] text-xl mb-2">Your Message</span>
    <textarea cols={40} rows={5} className='peer w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your message'/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>


  <span className="block font-medium text-[#ABAEB0] text-sm mb-2">Upload folder with images</span>
  <label className="block">
  
    <span className="sr-only">Choose profile photo</span>
    <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-pink-600
      hover:file:bg-violet-100
    "/>
  </label>

  {/* <button className="focus:outline-none focus-visible:ring">
  Submit
</button> */}

<button className="bg-blue-500 active:bg-blue-600">
  Submit
</button>
</form>


        </div>
    </div>
  )
}

export default Mintnftpage