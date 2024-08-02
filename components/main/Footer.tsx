import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Image from "next/image"

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t pt-24">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>
                    </a>
                    <a href="https://github.com/SIRCLE-RnD/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>
                    </a>
                    <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/sircle.ittelkompwt/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>
                    </a>
                    <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>
                    </a>
                    <a href="https://www.linkedin.com/company/sircle-research-and-development/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo/>
                        <span className="text-[15px] ml-[6px]">Linkedin</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <a href="https://www.linkedin.com/company/sircle-research-and-development/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">

                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                    </a>
                    <a href="https://www.linkedin.com/company/sircle-research-and-development/" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">

                        <span className="text-[15px] ml-[6px]">Learning about me</span>
                    </a>
                    <a href="mailto:sircle@ittelkom-pwt.ac.id" className="flex flex-row items-center my-[15px] cursor-pointer">

                        <span className="text-[15px] ml-[6px]">sircle@ittelkom-pwt.ac.id</span>
                    </a>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center mt-10">
                <p>&copy; Sircle 2024 Inc. All rights reserved</p>
                <p className="flex items-center justify-center mb-2">
                    <span>In Collaboration With&nbsp;</span>
                    <a href="https://www.linkedin.com/company/awscloudclubid" target="_blank">AWS Cloud Club</a>.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer
