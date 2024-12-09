import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SubscribeSection() {
    return (
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden gap-2">
                {/* Image Section */}
                <div className="w-full md:w-1/2 rounded-xl">
                    <Image
                        src="/sofa.png"
                        alt="Living Room"
                        width={500}
                        height={500}
                        className="object-cover w-full h-auto md:h-full rounded-xl"
                        priority
                    />
                </div>

                {/* Text & Form Section */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-pink-50 flex flex-col justify-between rounded-lg">
                    <div>
                        <h2 className="text-xl sm:text-2xl text-gray-900 mt-2">
                            S'inscrire & économiser <span className="text-blue-500">10%</span>
                        </h2>
                        <p className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Office ipsum you must be muted. Synergize helicopter prioritize anyway
                            job due harvest most opportunity didn't. Yet busy any meeting shark
                            light marginalised 4-blocker message. Productize corporate nail caught
                            synergy highlights lunch. Company another pushback items dear or any.
                        </p>
                    </div>

                    <form className=" flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="john@doe.com"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 flex items-center justify-center text-center sm:w-auto mt-2 sm:mt-0 bg-[#5CD2DD] text-white rounded-md font-medium hover:bg-blue-500 transition"
                        >
                            S'INSCRIRE <ArrowRight />
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}