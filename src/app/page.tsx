import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return(
    <div className="h-screen">
      <div className="flex  bg-[#f7f7f7] mb-4 ">
        <div className="w-1/2 flex gap-[16px] py-[14px] pl-[12px]">
        <h1 className="text-[14px]">Phone Number: 956 742 455 678</h1>
        <h2 className="text-[14px]">Email:info@ddsgnr.com</h2>
        </div>
        <div className="w-1/2"><Image className="absolute top-0 right-0 mt-3 mr-10" src={"/image/social2.svg"} alt=" hero image" width={132}height={24}/></div>
      </div>
      <Header/>
    <div className="flex h-[80%]">
      <div className="w-1/2 flex flex-col justify-center item-start m-12" >
      <h1 className="text-6xl font-bold pb-8">Learn new skills online with ease</h1> 
      <h2 className="text-2xl font-normal pb-20">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h2>
      <div className="flex gap-[16px]">
        <button className="bg-black text-white top-[680px] p-[10px] w-[200px]">Start learning now</button>
        <button className="bg-white text-black top-[680px] p-[10px] rounded-[6px] w-[200px] border-2 border-black"> Explor Corses</button>
        </div>
      </div>
      <div className=" w-1/2 flex">
        <Image className="ml-48  " 
        src={"/image/Image1.svg"}
        alt="hero image"
        width={640}
        height={900}
        />
      </div>
      </div>
      <div className="bg-[#F7F7F7] flex ">
        <div className="w-1/3 flex flex-col justify-center item-start my-12 text-[24px] font-bold">"Trusted by 2000+ companies worldwide.</div>
        <div className="flex gap-[19.12px] ml-24">
          <Image src={"/image/Airbnb.svg"}alt="hero image"width={123.8}height={38.52}/>
          <Image src={"/image/ogo.svg"} alt="hero image" width={123.8} height={38.52}/>
          <Image src={"/image/ipsum.svg"} alt="hero image" width={123.8} height={38.52}/>
          <Image src={"/image/logoipsum.svg"} alt="hero image" width={123.8} height={38.52}/>
          <Image src={"/image/logoipsum3.svg"} alt="hero image" width={123.8} height={38.52}/>
          <Image src={"/image/logoipsum4.svg"} alt="hero image" width={123.8} height={38.52}/>
        </div>
      </div>
      <div className="p-12">
      <h1 className="justify-center font-bold text-[48px] flex">Explore Courses By Category</h1>
      <h2 className="text-[18px] justify-center flex">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h2>
      </div>
      <div className="flex gap-[24px] pb-12">
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame1.svg"} alt="hero image" width={100} height={100}/> </div>
        <h1 className= "font-bold text-[20px] justify-center item-center m-6 my-12">Design & Development
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
        </h1>
        </div>
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame2.svg"} alt="hero image" width={100} height={100} /> </div>
        <h1 className="font-bold text-[20px] justify-center item-center m-6 my-12">Marketing
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
        </h1>
        </div>
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame3.svg"} alt="hero image" width={100} height={100} /></div>
        <h1 className="font-bold text-[20px] justify-center item-center m-6 my-12">Development
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
        </h1>
        </div>
      </div>
      <div className="flex gap-[24px] pb-12">
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame4.svg"} alt="hero image" width={100} height={100}/></div>
        <h1 className="font-bold text-[20px] justify-center item-center m-6 my-12">Communication
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
        </h1>
        </div>
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame5.svg"} alt="hero image" width={100} height={100}/></div>
        <h1 className="font-bold text-[20px] justify-cente item-center m-6 my-12">Digital Marketing
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
        </h1>
        </div>
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame6.svg"} alt="hero image" width={100} height={100}/></div>
        <h1  className="font-bold text-[20px] justify-center item-center m-6 my-12">Self Development
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
          </h1>
          </div>
      </div>
      <div className="flex gap-[24px] pb-12">
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame7.svg"} alt="hero image" width={100} height={100}/></div>
        <h1 className="font-bold text-[20px] justify-center item-center m-6 my-12">Business
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
        </h1>
        </div>
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame8.svg"} alt="hero image" width={100} height={100}/></div>
        <h1 className="font-bold text-[20px] justify-center item-center m-6 my-12">Finance
          <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
        </h1>
        </div>
        <div className="w-1/3 bg-[#F7F7F7] flex">
        <div className="m-6"><Image src={"/image/frame9.svg"} alt="hero image" width={100} height={100}/></div>
        <h1 className="font-bold text-[20px] justify-center item-center m-6 my-12">Consulting
          <h2 className="text-[18px] font-norml">50+ Courses Available</h2>
        </h1>
        </div>
        </div>
        <div className="justify-center flex">
        <button className="border-black border-2 text-[16px] p-4">View All Courses</button>
        </div>
        <div className="justify-center flex mt-40">
          <Image src={"/image/content.svg"} alt="hero image" width={1280} height={488}/>
        </div>
        <div>
          <h1 className="text-[56px] font-bold justify-center flex pt-44">Courses</h1>
          <h2 className="text-[18px] justify-center flex">Your Ultimate Guide to learning</h2>
          <div className="p-12 justify-center flex gap-[16px] text-[20px]">
            <button>Popular</button>
            <button>Recommended</button>
            <button>Best  Price</button>
            </div>    
            <div className="gap-52 flex">
            <div className="w-1/3 bg-[#F7F7F7]"><Image src={"/image/uxui.svg"} alt="hero image" width={416} height={300}/>
            <h1 className="pt-6"><Image src={"/image/ratings1.svg"} alt="hero image" width={382} height={24}/></h1>
            <div className="font-bold text-[24px] pt-4">UX/UI Design 201</div>
            <div className="font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros.</div>
            <button className=" m-6  p-2 border-2 border-black text-[16px]">Enroll Now</button>
            <button className="p-6">$400</button></div>

            <div className="w-1/3 bg-[#F7F7F7] "><Image src={"/image/python1.svg"} alt="hero image" width={416} height={534}/>
            <h1 className="pt-6"><Image src={"/image/ratings2.svg"} alt="hero image" width={382} height={24}/></h1>
            <div className="font-bold text-[24px] pt-4">Introduction to Python</div>
            <div className="font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros.</div>
            <button className=" m-6  p-2 border-2 border-black text-[16px]">Enroll Now</button>
            <button className="p-6">$400</button></div>

            <div className="w-1/3 bg-[#F7F7F7]"><Image src={"/image/data.svg"} alt="hero image" width={416} height={300}/>
            <div><Image className="pt-6" src={"/image/ratings3.svg"} alt="hero image" width={382} height={24}/></div>
            <div className="font-bold text-[24px] pt-4">Data Analysis for Beginners</div>
            <div className="font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros.</div>
            <button className=" m-6 p-2 border-2 border-black text-[16px]">Enroll Now</button>
            <button className="p-6">$400</button></div>
        </div>
    </div>
    <div className="gap-52 flex mt-20">
      <div className="w-1/3 bg-[#F7F7F7]"><Image src={"/image/art.svg"} alt="hero image" width={416} height={300}/>
      <Image className="pt-6"src={"/image/artrating.svg"} alt="hero image" width={382} height={24}/>
      <div className="font-bold text-[24px] pt-4">Art Specialization</div>
      <div className="font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
      <button className=" m-6 p-2 border-2 border-black text-[16px]">Enroll Now</button>
      <button className="p-6">$400</button></div>

      <div className="w-1/3 bg-[#F7F7F7]"><Image src={"/image/law.svg"} alt="hero image" width={416} height={300}/>
      <Image className="pt-6"src={"/image/lawrating.svg"} alt="hero image" width={382} height={24}/>
      <div className="font-bold text-[24px] pt-4">Rule of Law</div>
      <div className="font-normal text-[16p]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
      <button className=" m-6 p-2 border-2 border-black text-[16px]">Enroll Now</button>
      <button className="p-6">$400</button></div>

      <div className="w-1/3 bg-[#F7F7F7]"><Image src={"/image/web.svg"} alt="hero image" width={416} height={300}/>
      <Image className="pt-6"src={"/image/webrating.svg"} alt="hero image" width={382} height={24}/>
      <div className="font-bold text-[24px] pt-4">Introduction to webflow</div>
      <div className="font-normal text-[16p]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
      <button className=" m-6 p-2 border-2 border-black text-[16px]">Enroll Now</button>
      <button className="p-6">$400</button></div>
      </div> 
      <div className="justify-center flex m-16"><button className="border-2 border-black text-[16px] px-2 py-2">View All Courses</button></div>
      <div className="bg-[#F7F7F7] pt-24">
        <h1 className="font-bold justify-center flex text-[48px] pb-6 ">Our team</h1>
        <h2 className="font-normal justify-center flex text-[18px] pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
        </div>
        <div className="flex bg-[#F7F7F7]">
          <div className="w-1/3">
          <div className="justify-center flex"><Image src={"/image/james.svg"} alt="hero image" width={80} height={80}/></div>
          <h1 className="font-semibold text-[20px] justify-center flex pt-[20px]">James Nduku</h1>
          <h2 className="font-normal text[18px] justify-center flex">Marketing Coordinator</h2>
          <div className="justify-center flex py-6"><Image src={"/image/Social1.svg"} alt="hero image" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="justify-center flex "><Image src={"/image/josh.svg"} alt="hero image" width={80} height={80}/></div>
          <h1 className="font-semibold text-[20px] justify-center flex pt-[20px]">Joseph Munyambu</h1>
          <h2 className="font-normal text[18px] justify-center flex">Nursing Assistant</h2>
          <div className="justify-center flex py-6"><Image src={"/image/Social1.svg"} alt="hero image" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="justify-center flex "><Image src={"/image/joseph.svg"} alt="hero image" width={80} height={80}/></div>
          <h1 className="font-semibold text-[20px] justify-center flex pt-[20px]">Joseph Ngumbau</h1>
          <h2 className="font-normal text[18px] justify-center flex">Medical Assistant</h2>
          <div className="justify-center flex py-6"><Image src={"/image/Social1.svg"} alt="hero image" width={100} height={24}/></div>
          </div>
          </div>
          <div className="flex bg-[#F7F7F7] pt-6">
          <div className="w-1/3">
          <div className="justify-center flex "><Image src={"/image/eric.svg"} alt="hero image" width={80} height={80}/></div>
          <h1 className="font-semibold text-[20px] justify-center flex pt-[20px]">Erick Kipkemboi</h1>
          <h2 className="font-normal text[18px] justify-center flex">Web Designer</h2>
          <div className="justify-center flex py-6"><Image src={"/image/Social1.svg"} alt="hero image" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="justify-center flex "><Image src={"/image/2lst.svg"} alt="hero image" width={80} height={80}/></div>
          <h1 className="font-semibold text-[20px] justify-center flex pt-[20px]">Stephen Kerubo</h1>
          <h2 className="font-normal text[18px] justify-center flex">President of Sales</h2>
          <div className="justify-center flex py-6"><Image src={"/image/Social1.svg"} alt="hero image" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="justify-center flex "><Image src={"/image/jhon.svg"} alt="hero image" width={80} height={80}/></div>
          <h1 className="font-semibold text-[20px] justify-center flex pt-[20px]">John Leboo</h1>
          <h2 className="font-normal text[18px] justify-center flex">Dog Trainer</h2>
          <div className="justify-center flex py-6"><Image src={"/image/Social1.svg"} alt="hero image" width={100} height={24}/></div>
          </div>
          </div>
          <div className="pt-28 bg-[#F7F7F7]">
            <h1 className="font-bold text-[48px] pl-20 ">Customer testimonials</h1>
            <h2 className="text-[18px] pl-20 pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          </div>
          <div className="flex bg-[#F7F7F7] gap-12 py-12 px-12">
            <div className="w-1/3 border-2 border-black "><Image className="pt-6 pl-6" src={"/image/stars.svg"} alt="hero image" width={116} height={18.89}/>
            <h1 className="text-[18px] p-8">"Lorem ipsum dolor sit  amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</h1>
            <div><Image className="pl-8 pb-8" src={"/image/avatar1.svg"} alt="heri image" width={254} height={56}/></div>
            </div>
            <div className="w-1/3 border-2 border-black "><Image className="pt-6 pl-6" src={"/image/stars.svg"} alt=" hero image" width={116} height={18.89}/>
            <h1 className="text-[18px] p-8">"Lorem ipsum dolor sit  amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</h1>
            <div><Image className="pl-8 pb-8" src={"/image/avatar2.svg"} alt="heri image" width={254} height={56}/></div>
            </div>
            <div className="w-1/3 border-2 border-black "><Image className="pt-6 pl-6" src={"/image/stars.svg"} alt="hero image" width={116} height={18.89}/>
            <h1 className="text-[18px] p-8">"Lorem ipsum dolor sit  amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</h1>
            <div><Image className="pl-8 pb-8" src={"/image/avatar3.svg"} alt="heri image" width={254} height={56}/></div>
            </div>
           </div>
           <div className="bg-[#F7F7F7] pb-12"><Image className="ml-16" src={"/image/content1.svg"} alt="hero image" width={1570} height={48}/></div>

           <div className="flex mt-24 ">
           <div className="w-1/2 pl-44">.
           <h1 className="font-semibold text-[18px] ">Subscribe to our newsletter</h1>
           <h2 className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2></div>

           <div className="w-1/2">
           <div className="flex gap-2 pl-20">
           <div> <h1 className="border-2 border-black justify-right p-4 pr-36 rounded-[5px]">Enter your email </h1></div>
           <button className=" border-black border-2 bmx-22 pl-22 rounded-[5px] px-8">Subscribe</button>
           </div>
           <h1 className="pt-6 pl-20 text-[12px]">By subscribing you agree to with our Privacy Policy</h1>
           </div>
           </div>

           <div className="flex pt-24 pl-32">
            <div className="w-1/4"><Image className="ml-12" src={"/image/theme.svg"} alt="hero image" width={130.6} height={30.38}/></div>
            
            <div className="w-1/4">
            <h1 className="text-[16px] font-semibold pl-16">Courses</h1>
              <div className="text-tiny pl-16 pt-4">
                <p className="">Business</p>
                <p className="pt-4">Development</p>
                <p className="pt-4">Technology</p>
                <p className="pt-4">Design</p>
                <p className="pt-4">Programming</p>
              </div>
            
            </div>

            <div className="w-1/4"><h1 className="text-[16px] font-semibold pl-16">Resources</h1>
              <div className="text-tiny pl-16 pt-4">
                <p className="">Career</p>
                <p className="pt-4">Resume</p>
                <p className="pt-4">Learning</p>
                <p className="pt-4">Interview Preparation</p>
                <p className="pt-4">Jobs</p>
              </div>
              </div>
            <div className="w-1/4"><h1 className="text-[16px] font-semibold pl-16">About Us</h1>
              <div className="text-tiny pl-16 pt-4">
                <p className="">Contact</p>
                <p className="pt-4">Help/Support</p>
                <p className="pt-4">FAQ</p>
                <p className="pt-4">Terms and Conditions</p>
                <p className="pt-4">Partners</p>
              </div>
              </div>
           </div>
           <div><Image className="p-16" src={"/image/divider.svg"} alt="hero image" width={2120} height={1}/></div>

           <div className="flex p-12">
            <div className="w-1/2 flex gap-6">2023 Ddsgnr. All right reserved.
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies Settings</div>
            </div>
            <div className="w-1/4 pl-"> <Image className="absolute right-0 mr-16" src={"/image/links.svg"} alt="hero image"width={132} height={24}/></div>
           </div>
          </div>
      
  );
}