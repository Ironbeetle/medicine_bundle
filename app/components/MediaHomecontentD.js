'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import MediaBkgD from '../../../public/TradTeachingsBKG.jpg';
import MediaBkgM from '../../../public/GeneralBKGM.jpg';
import MediaBkgT from '../../../public/TradTeachingsBKGT.jpg';
import HamburgerMenu from '../components/HamburgerMenu';
function MediaHomecontentD(){
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
    function Bkgselector() {
        if (width < 479) {
            return MediaBkgM
        }else if(width > 481 && width < 1024){
            return MediaBkgT
        }else {
            return MediaBkgD
        }
    }
    function FlexSelector() {
        if (width < 479) {
            return 'flexpaneldisplay';
        }else if(width > 481 && width < 1024){
            return 'flexpaneldisplay2';
        }else {
            return 'row1fr1fr flexpaneldisplay';
        }
    }
    function ColumnSelector() {
        if (width < 479) {
            return 'topLayercolumn flexpaneldisplay';
        }else if(width > 481 && width < 1024){
            return 'topLayercolumn flexpaneldisplay heightA';
        }else {
            return 'topLayercolumn flexpaneldisplay heightB';
        }
    }
    function GallerySelector(){
        if (width < 479) {
            return '/pages/ArtGalleryM'
        }else if(width > 481 && width < 1024){
            return '/pages/ArtGalleryT'
        }else {
            return '/pages/ArtGalleryD'
        }
    }
    function thumbnailwidth(){
        if (width < 479) {
            return 100
        }else if(width > 481 && width < 1024){
            return 125
        }else {
            return 200
        }
    }
    function thumbnailheight(){
        if (width < 479) {
            return 100
        }else if(width > 481 && width < 1024){
            return 125
        }else {
            return 200
        }
    }
    function VidGallSelector(){
        if (width < 479) {
            return "/pages/VideoGalleryM"
        }else if(width > 481 && width < 1024){
            return "/pages/VideoGalleryT"
        }else {
            return "/pages/VideoGalleryD"
        }
    }
    function LabelSelector(){
        if (width < 479) {
            return "row1fr2fr flexpaneldisplay"
        }else if(width > 481 && width < 1024){
            return "flexpaneldisplay"
        }else {
            return "flexpaneldisplay"
        }
    }
    function BTNSelector(){
        if (width < 479) {
            return "topLayeritem4"
        }else if(width > 481 && width < 1024){
            return "topLayeritem5"
        }else {
            return "topLayeritem5"
        }
    }
    return(
        <>
            <div className="hamlink">
                <HamburgerMenu/>
            </div>
            <div className="bkgcontainer">
                <Image
                    src={Bkgselector()}
                    alt="MediaHomeBKG"
                    fill
                    loading='eager'
                    quality={90}
                />
            </div>
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay:1, ease: "easeInOut"}}
                className='appcontainer tabcontent'
            >
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay:0.75, ease: 'easeInOut'}}
                    className={FlexSelector()}
                    style={{height:"100dvh"}}
                >
                    <div className={ColumnSelector()}>
                        <div className={BTNSelector()} style={{height:"fit-content"}}>
                            <Link href={VidGallSelector()} className={LabelSelector()} style={{textDecoration:'none'}}>
                                <Image
                                    src="/thumbnails/Artist.jpg" 
                                    alt="MenuBKG"
                                    width={thumbnailwidth()}
                                    height={thumbnailheight()}
                                    quality={90}
                                />
                                <div className="apptextB">
                                    <h2>
                                        Videos<br/>Documentaries<br/>Interviews
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={ColumnSelector()} style={{height:"fit-content"}}>
                        <div className={BTNSelector()}>
                            <Link href={GallerySelector()} className={LabelSelector()} style={{textDecoration:'none'}}>
                                <Image
                                    src="/thumbnails/Thunderbird.jpg" 
                                    alt="MenuBKG"
                                    width={thumbnailwidth()}
                                    height={thumbnailheight()}
                                    quality={90}
                                />
                                <div className="apptextB">
                                    <h2>
                                        Original <br/>Paintings<br/>Gallery
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>  
                </motion.div>
            </motion.div>
        </>
    );
}
export default MediaHomecontentD;