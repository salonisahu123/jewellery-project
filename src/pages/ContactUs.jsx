import React from "react";
import { ArrowUpRight } from "lucide-react";

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24 border-b border-[#E8D8B0]">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="flex flex-col items-center justify-center text-center space-y-4">

            <header>
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-semibold">
                GET IN TOUCH
              </span>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2B2118] tracking-wide">
                Contact Us
              </h1>
            </header>


            <nav>
              <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">

                <li>
                  <a className="hover:text-[#C8A45D]">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>

                <li>
                  <a className="hover:text-[#C8A45D]">
                    Elements
                  </a>
                  <span className="mx-2">/</span>
                </li>

                <li className="text-[#C8A45D] font-serif italic">
                  Contact Us
                </li>

              </ol>
            </nav>

          </div>

        </div>
      </section>


      {/* Contact Section */}
      <section className="bg-white py-16 md:py-24 px-4">

        <div className="container mx-auto max-w-6xl">

          <div className="
          bg-[#FFFDF8]
          border border-[#E8D8B0]
          rounded-3xl
          p-8 md:p-16
          grid md:grid-cols-2
          gap-12
          shadow-xl
          relative
          overflow-hidden
          ">


            {/* Glow */}
            <div className="
            absolute top-0 right-0
            w-72 h-72
            bg-[#C8A45D]/20
            blur-[120px]
            rounded-full
            "/>



            {/* Left Content */}
            <div className="space-y-8 relative z-10">


              <h2 className="
              text-4xl md:text-6xl
              font-serif
              font-bold
              text-[#2B2118]
              leading-tight
              ">

                Get in 
                <span className="text-[#C8A45D]">
                  {" "}—{" "}
                </span>

                <br/>

                touch with us

              </h2>


              <p className="
              text-gray-600
              max-w-md
              leading-relaxed
              ">
                We're here to help! Whether you have a question about our
                jewelry services, need assistance with your account, or want
                to provide feedback, our team is ready to assist you.
              </p>



              <div className="
              space-y-6
              pt-4
              border-t
              border-[#E8D8B0]
              ">


                <div>

                  <span className="block text-xs uppercase tracking-widest text-gray-400">
                    Email:
                  </span>

                  <a className="
                  text-lg
                  text-[#C8A45D]
                  font-semibold
                  ">
                    hello@goldenhue.com
                  </a>

                </div>



                <div>

                  <span className="block text-xs uppercase tracking-widest text-gray-400">
                    Phone:
                  </span>

                  <p className="
                  text-lg
                  font-semibold
                  text-[#2B2118]
                  ">
                    +1 234 567 78
                  </p>

                  <span className="text-xs text-gray-500">
                    Available Monday to Friday, 9 AM - 6 PM GMT
                  </span>

                </div>


              </div>



              <button className="
              flex items-center gap-2
              bg-[#2B2118]
              text-white
              px-6 py-3
              rounded-full
              hover:bg-[#C8A45D]
              hover:text-black
              transition
              ">

                Live Chat

                <span className="
                bg-[#C8A45D]
                text-black
                p-1
                rounded-full
                ">

                  <ArrowUpRight size={14}/>

                </span>

              </button>


            </div>




            {/* Form */}

            <div className="
            bg-white
            border border-[#E8D8B0]
            rounded-2xl
            p-6 md:p-8
            shadow-lg
            ">


            <form 
            onSubmit={handleSubmit}
            className="space-y-5"
            >


            <div className="grid grid-cols-2 gap-4">


            {
              ["First Name","Last Name"].map((item)=>(
                <div key={item}>

                <label className="
                text-xs
                uppercase
                text-gray-500
                ">
                  {item}
                </label>


                <input
                required
                placeholder={`Enter your ${item.toLowerCase()}...`}
                className="
                w-full
                mt-2
                border
                border-[#E8D8B0]
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-[#C8A45D]
                "
                />

                </div>
              ))
            }


            </div>



            <div>

            <label className="text-xs uppercase text-gray-500">
              Email
            </label>

            <input
            type="email"
            required
            placeholder="Enter your email..."
            className="
            w-full
            mt-2
            border
            border-[#E8D8B0]
            rounded-xl
            px-4 py-3
            outline-none
            focus:border-[#C8A45D]
            "
            />

            </div>



            <div>

            <label className="text-xs uppercase text-gray-500">
              How can we help you?
            </label>


            <textarea
            rows="4"
            placeholder="Enter your message..."
            className="
            w-full
            mt-2
            border
            border-[#E8D8B0]
            rounded-xl
            px-4 py-3
            outline-none
            focus:border-[#C8A45D]
            "
            />


            </div>




            <button
            className="
            flex
            items-center
            gap-2
            bg-[#C8A45D]
            text-white
            px-6 py-3
            rounded-full
            font-semibold
            hover:bg-[#B38B3E]
            transition
            "
            >

              Send Message

              <ArrowUpRight size={16}/>

            </button>



            </form>


            </div>


          </div>

        </div>

      </section>

    </div>
  )
}

export default ContactUs;