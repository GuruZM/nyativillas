import React from "react";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";

export default function Reviews() {
    return (
        <div className="md:max-h-fit md:h-screen  w-4/5 m-auto   border-yellow-300 relative">
            <div className="card absolute left-0 hover:scale-105 transition ease-in-out duration-300 rounded-lg font-normal max-w-sm shadow-md p-10">
                <h3 className="pt-2 font-bold">Sanjay G</h3>
                <p className="py-10 text-sm pl-10">
                    It is luxurious and great place to stay with a group of
                    people, It's located very close to the confluence of Kafue
                    with Zambezi. This is well furnished, air-conditioned, self
                    catering Villa with beautiful infinity pool. There are two
                    bedrooms , living room and a kitchen so you dont always have
                    to find a place to eat.{" "}
                </p>
                <div className="flex">
                    <AiFillHeart color="#FFAE00" className=" " />
                    <AiFillHeart color="#FFAE00" className="mx-2" />
                    <FiHeart color="#FFAE00" className=" " />
                </div>
            </div>
            <div className="card absolute right-20 top-10   border-yellow-400  max-w-xl   p-10">
                <h3 className="pt-2 font-bold">Moka</h3>
                <p className="text-#FFAE00 text-sm py-5 pl-10">
                    Heavenly spot! Fantastic location. Upmarket and modern
                    accommodation on the banks of the river. And only 2-3 hours
                    drive from Lusaka. This is a place we definitely will enjoy
                    for many years to come! The friendly staff and the private
                    boat available for use at our convenience made this a
                    holiday to remember. .{" "}
                </p>
            </div>

            <div className="card absolute left-20 top-[400px]   border-yellow-400  max-w-xl   p-10">
                <h3 className="pt-2 font-bold">Vasubobbili</h3>
                <p className="text-sm pl-10 py-5">
                    Niyati is home away from home. It is the greatest homely
                    place you can find all along Lower Zambezi. It is luxurious,
                    located very close to the Confluence of Kafue with Zambezi.
                    Hence very close to the Bridge across Kafue. The lodge is
                    built on a very high elevation, enabling the residents to
                    look far and wide across Kafue. .{" "}
                </p>
            </div>
            <div className="card absolute right-0 top-96  hover:scale-105 transition ease-in-out duration-300 rounded-md shadow-lg max-w-sm   p-10">
                <h3 className="pt-2 font-bold">Sangeeta</h3>
                <p className="text-sm py-5 pl-10">
                    An Amazing Experience We went from Lusaka for a two nights
                    stay. Staying at Niyati Villas was a wonderful experience.
                    The staff was friendly and helpful. Rooms were spacious and
                    beds were comfortable. Liked the way the pool lit up in the
                    night. We were taken good care of and overall it was an
                    amazing experience.{" "}
                </p>
                <div className="flex">
                    <AiFillHeart color="#FFAE00" className=" " />
                    <AiFillHeart color="#FFAE00" className="mx-2" />
                    <FiHeart color="#FFAE00" className=" " />
                </div>
            </div>
        </div>
    );
}
