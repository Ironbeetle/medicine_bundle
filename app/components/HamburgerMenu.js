'use client';
import React, {useState, useEffect} from 'react';
import Link  from "next/link";
import Image from 'next/image';
export default function HamburgerMenu() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
      setWidth(window.innerWidth);
      const handleResize = () => {
          setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
    }, []);
    function BackHome() {
        if (width < 479) {
            return "/pages/CominghomeM"
        }else if(width > 481 && width < 1024){
            return '/pages/CominghomeT'
        }else {
            return '/pages/CominghomeD'
        }
    }
    function IMGsizer() {
        if (width < 479) {
            return 45
        }else if(width > 481 && width < 1024){
            return 60
        }else {
            return 75
        }
    }
    function LivingDocument() {
        if (width < 479) {
            return "/pages/LivingDocM"                    
        }else if(width > 481 && width < 1024){
            return '/pages/LivingDocT'
        }else {
            return '/pages/LivingDocD'
        }
    }
    function Teachings() {
        if (width < 479) {
            return "/pages/TeachHomeM"
        }else if(width > 481 && width < 1024){
            return '/pages/TeachHomeT'
        }else {
            return '/pages/TeachHomeD'
        }
    }
    function Program() {
        if (width < 479) {
            return "/pages/AboutUsM"
        }else if(width > 481 && width < 1024){
            return '/pages/AboutUsT'
        }else {
            return '/pages/AboutUsD'
        }
    }
    function VideoGallery() {
        if (width < 479) {
            return "/pages/MediaHomeD"
        }else if(width > 481 && width < 1024){
            return '/pages/MediaHomeD'
        }else {
            return '/pages/MediaHomeD'
        }
    }
    return (
        <>
            <div className="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu">
                    <li>
                        <Link href={BackHome()} style={{height:"100%"}}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={Program()} style={{height:"100%"}}>
                            <div> 
                                <Image src="/Eaglemenuicon.png" alt="Logo" width={IMGsizer()} height={IMGsizer()} />
                                About Program
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={LivingDocument()} style={{height:"100%"}}>
                            <div>
                                Living Document
                                <Image src="/TreeofLifeicon.png" alt="Logo" width={IMGsizer()} height={IMGsizer()} />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={Teachings()} style={{height:"100%"}}>
                            <div>
                                <Image src="/Teachingsicon.png" alt="Logo" width={IMGsizer()} height={IMGsizer()} />
                                Teachings
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={VideoGallery()} style={{height:"100%"}}>
                            <div>
                                Media Library
                                <Image src="/Wolficon.png" alt="Logo" width={IMGsizer()} height={IMGsizer()} />
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

