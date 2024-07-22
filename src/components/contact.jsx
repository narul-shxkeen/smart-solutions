import React,{useState} from "react";

function Contact(){

    const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://smart-solutions-mailing.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submitted");
    name.value = "";
    email.value = "";
    message.value = "";
  
    setTimeout(() => {
      setStatus("Submit");
    }, 3000);
    let result = await response.json();
   
  };

    return <div className="flex flex-col md:flex-row bg-[#F7F0F0] justify-center items-center gap-10 md:gap-20 py-10 md:py-20">
      <div className="flex flex-col gap-6 md:gap-10 w-full md:w-2/5 px-4">
        <h1 className="text-xl md:text-3xl poppins-bold">Ready to get custom prints? Send us a message</h1>
        <p className="text-sm md:text-lg poppins-regular w-full md:w-2/3">Looking for custom print designs for your business? Fill out the form below with your message, and we’ll be delighted to answer any questions you may have. We’ll get back to you soon!</p>
        <p className="text-sm md:text-lg poppins-regular">Alternatively, you can reach out to us at following:</p>

<p className="text-sm md:text-lg poppins-regular">Email: <span className="text-[#00A7E1]">smartsolutionsprintnpack@gmail.com</span></p>
<p className="text-sm md:text-lg poppins-regular">Phone: <span className="text-[#00A7E1]">9810018313</span> </p>
<p className="text-sm md:text-lg poppins-regular">Office Locations: Bahadurgarh and Mayapuri</p>
      </div>
      {/* <div className="w-full flex justify-center md:w-2/5"> */}
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-8/12 md:w-1/3 bg-[#E8E9EB] rounded-xl shadow-xl py-6 md:py-10">
      <div className="flex flex-col justify-between overflow-x-hidden">
        <label htmlFor="name" className="poppins-semibold">Your Name</label>
        <input type="text" id="name" className="relative rounded-lg  w-[200px] sm:w-[250px] border-[#979797] border-1" required />
      </div>
      <div className="flex flex-col justify-between overflow-x-hidden">
        <label htmlFor="email" className="poppins-semibold">Your Email</label>
        <input type="email" id="email" className="relative rounded-lg border-1 border-[#979797] w-[200px] sm:w-[250px]" required />
      </div>
      <div className="flex flex-col justify-between overflow-x-hidden">
        <label htmlFor="message" className="poppins-semibold">Your Message</label>
        <textarea id="message" required className="relative rounded-lg border-1 border-[#979797] w-[200px] sm:w-[250px] h-[100px] sm:h-[200px]"/>
      </div>
      <button type="submit" className="bg-[#00A7E1] px-3 py-1 rounded-lg text-white poppins-medium">{status}</button>
    </form>
    {/* </div> */}
    </div>
}

export default Contact;