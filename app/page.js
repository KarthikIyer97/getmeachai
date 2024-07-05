import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <div className="flex flex-col gap-4 justify-center items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
    <div className="flex gap-2 font-bold md:text-5xl justify-center items-center text-2xl">Get Me a Chai <span><img className="invert invertImg" width={77} src="/tea.gif" alt="" /></span></div>
    <p className="text-center md:text-left">
      A crowdfunding platform for creators to fund their projects. 
    </p>
    <p className="text-center md:text-left">
      A place your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
    </p>
    <div>
      <Link href={"/login"}>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
    </Link>
    <Link href={"/about"}>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </Link>
    </div>
    </div>
    <div className="bg-white h-1 opacity-10">

    </div>

    <div className="text-white container mx-auto pb-28 pt-14 px-10">
      <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="rounded-full bg-slate-400 p-2" width={77} src="/man.gif" alt="" />
          <p className="font-bold text-center">Fans want to help</p>
          <p className="text-center">Your fans are available to support you</p>
        </div>


        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="rounded-full bg-slate-400 p-2" width={77} src="/coin.gif" alt="" />
          <p className="font-bold text-center">Fans want to contribute</p>
          <p className="text-center">Your fans are willing to contribute financially</p>
        </div>


        <div className="item space-y-3 flex flex-col justify-center items-center">
          <img className="rounded-full bg-slate-400 p-2" width={77} src="/group.gif" alt="" />
          <p className="font-bold text-center">Fans want to collaborate</p>
          <p className="text-center">Your fans are ready to collaborate with you</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10">

</div>

<div className="text-white container mx-auto pb-28 pt-14 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-14">Learn More about us!</h2>

      <div className="flex justify-center w-[90%] h-[40vh] md:w-1/2 md:h-[50vh] lg:w-1/2 lg:h-[40vh] xl:w-1/2 xl:h-[40vh]">
      <iframe width={400}  height={240} src="https://www.youtube.com/embed/2JTIcniQa4Q?si=fpumIQAmKToy4Qt7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
           
           </div>
           </div>

    </>
   
  );
}
