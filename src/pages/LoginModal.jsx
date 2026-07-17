

import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function LoginModal({ onClose }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password
    });
  };


  return (

    <div className=" fixed inset-0 z-50  bg-black/30 backdrop-blur-sm flex items-center justify-center px-4">

 <div className="  relative  w-full max-w-5xl  bg-white border border-[#E8D8B0]  rounded-3xl  shadow-2xl overflow-hidden ">


        {/* Close Button */}
        <button
          onClick={()=> navigate('/')}
          className=" absolute right-6  top-6   text-gray-500 hover:text-[#C8A45D]  transition  z-10  ">  <X size={26}/>
        </button>

        <div className="grid md:grid-cols-2">

          {/* LEFT SIDE */}
      <div className=" p-8   flex 
          justify-center  items-center  bg-[#FFFDF8]   border-r  border-[#E8D8B0] ">


            <div className="
            bg-white  border border-[#E8D8B0]
            rounded-3xl p-8  w-ful  max-w-md  shadow-lg  ">

 {/* Logo Circle */}

              <div className="flex justify-center">

                <div className="
                w-44  h-44 rounded-full
                bg-gradient-to-b  from-[#C8A45D]  to-[#FFFDF8]   p-[2px]  flex  items-center  justify-center  ">


                  <div className="  w-full  h-full rounded-full
                  bg-white  flex  items-center justify-center  ">


                    <span className="
                    text-2xl  tracking-widest   text-[#C8A45D]  font-serif font-bold  ">
                      GOLDENHUE
                    </span>


                  </div>


                </div>

              </div>




              {/* Offer Box */}


              <div className="  bg-[#FFFDF8]
              border   border-[#E8D8B0]
              mt-6 rounded-xl  text-center py-5 ">


                <p className="   text-sm text-gray-500  uppercase  tracking-widest  ">
                  On your first order get </p>


                <h1 className="
                text-5xl font-serif font-bold  text-[#C8A45D]  mt-1  ">  ₹500

                  <span className="
                  text-xl
                  font-light
                  text-gray-600
                  ">
                    {" "}off
                  </span>
 </h1>


              </div>




              <h2 className="
              text-center
              text-xl
              mt-6
              text-[#C8A45D]
              font-serif
              ">
                Exclusive Privileges
              </h2>




              <div className="
              flex
              flex-col
              gap-4
              mt-6
              text-sm
              text-gray-600
              ">


                <div className="flex gap-3 items-center">
                  <span className="text-[#C8A45D]">
                    🪙
                  </span>
                  Earn Encircle & Tata Neu Coins
                </div>



                <div className="flex gap-3 items-center">
                  <span className="text-[#C8A45D]">
                    ❤️
                  </span>
                  Unlock personalized Wishlist
                </div>



                <div className="flex gap-3 items-center">
                  <span className="text-[#C8A45D]">
                    🎁
                  </span>
                  Bespoke VIP Customer Support
                </div>


              </div>


            </div>


          </div>





          {/* RIGHT SIDE FORM */}



          <div className="
          bg-white
          flex
          items-center
          justify-center
          p-10
          pt-16
          ">


            <div className="w-full max-w-md">


              <span className="
              text-xs
              uppercase
              tracking-widest
              text-[#C8A45D]
              font-semibold
              ">
                CRAFTED FOR PERFECTION
              </span>



              <h1 className="
              text-4xl
              font-serif
              font-semibold
              text-[#2B2118]
              mt-2
              ">
                Welcome to GoldenHue!
              </h1>



              <p className="
              mt-3
              text-gray-500
              mb-10
              ">
                Login/Signup to access our luxury diamond and gold collections.
              </p>





              <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              >



                {/* Name */}

                <input

                type="text"

                value={name}

                onChange={(e)=>setName(e.target.value)}

                placeholder="Your full name"

                required

                className="
                h-14
                rounded-full
                px-6
                border
                border-[#E8D8B0]
                bg-[#FFFDF8]
                outline-none
                focus:border-[#C8A45D]
                text-[#2B2118]
                "
                />





                {/* Email */}

                <input

                type="email"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

                placeholder="you@email.com"

                required

                className="
                h-14
                rounded-full
                px-6
                border
                border-[#E8D8B0]
                bg-[#FFFDF8]
                outline-none
                focus:border-[#C8A45D]
                text-[#2B2118]
                "
                />






                {/* Password */}

                <input

                type="password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

                placeholder="••••••••"

                required

                className="
                h-14
                rounded-full
                px-6
                border
                border-[#E8D8B0]
                bg-[#FFFDF8]
                outline-none
                focus:border-[#C8A45D]
                text-[#2B2118]
                "
                />







                <button

                type="submit"

                className="
                mt-4
                h-14
                rounded-full
                bg-[#C8A45D]
                text-white
                font-semibold
                hover:bg-[#B38B3E]
                transition
                flex
                items-center
                justify-center
                gap-2
                "

                >

                  Create Account

                  <ArrowUpRight size={16}/>


                </button>




              </form>





              <p className="
              text-center
              mt-12
              text-xs
              text-gray-500
              ">

                By continuing, I agree to the

                <br/>

                <span className="
                text-[#C8A45D]
                cursor-pointer
                ">
                  Terms of Use
                </span>

                {" & "}

                <span className="
                text-[#C8A45D]
                cursor-pointer
                ">
                  Privacy Notice
                </span>


              </p>



            </div>


          </div>


        </div>


      </div>


    </div>

  );
}