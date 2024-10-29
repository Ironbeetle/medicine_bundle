'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import {motion} from "framer-motion";
const Storycontent = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [width, setWidth ] = useState(0);
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
    let BKGSelector = () => {
        if (width < 480) {
            return <video autoPlay loop className='videobkg'>
                        <source src="/webm/CreationVidbkgMobile.webm" type="video/webm; codecs=vp9"/>
                    </video>
        }else if (width > 481 && width < 1024){
            return <video autoPlay loop className='videobkg'>
                        <source src="/webm/CreationVidbkgTab.webm" type="video/webm; codecs=vp9"/>
                    </video>
        }else {
            return <video autoPlay loop className='videobkg'>
                    <source src="/webm/CreationVidbkg.webm" type="video/webm; codecs=vp9"/>
                    </video>
        }
    }
    let backSelect = () => {
        if (width < 480) {
            return "/pages/TeachHomeM"
        }else if (width > 481 && width < 1024){
            return "/pages/TeachHomeT"
        }else {
            return "/pages/TeachHome"
        }
    }
    let columnSelect = () => {
        if (width < 480) {
            return "flexpaneldisplay"
        }else if (width > 481 && width < 1024){
            return "flexpaneldisplay"
        }else {
            return "row1fr1fr"
        }
    }
    let imgwidth = () => {
        if (width < 480) {
            return 200
        }else if (width > 481 && width < 1024){
            return 400
        }else {
            return 600
        }
    }
    let imgheight = () => {
        if (width < 480) {
            return 200
        }else if (width > 481 && width < 1024){
            return 400
        }else {
            return 600
        }
    }
    const Viewdefault = () => {
        return(
            <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                <div className='objectbottom flexpaneldisplay'>
                    <div className='topLayeritembtn'>                         
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                            style={{width: '100%', height: '100%'}}
                        >
                            <h1 className='apptextB'>Begin</h1>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    let DesktopView = () => {
        return(
            <div className='tabcontent2'>
                <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                    <iframe 
                        id="iframeId"
                        src="https://player.vimeo.com/video/992901339?"
                        width="720" 
                        height="405"
                        style={{border:'solid', borderColor:'black', borderWidth:'3px'}} 
                    ></iframe>
                    <div className='topLayeritembtn'>                         
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                            style={{width: '100%', height: '100%'}}
                        ><h1 className='apptextB'>Back</h1></button>
                    </div>
                </div> 
            </div>
        );
    }
    let MobileView = () => {
        return(
            <div className='tabcontent2' style={{height:"100dvh"}}>
                <div className='splitpaneltop'>
                    <div className='teachpanelMM' style={{height:"100%"}}>
                        <iframe 
                            id="iframeId"
                            src="https://player.vimeo.com/video/992901339?"
                            width="100%"
                            height="100%"
                            style={{border:'none'}} 
                        />
                    </div>
                </div>
                <div className='splitpanelbot'>
                    <div className='flexpaneldisplay'>
                        <div className='topLayeritembtn'>                         
                            <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                                style={{width: '100%', height: '100%'}}
                            >
                                <h1 className='apptextB'>Back</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    let ViewSelector = () => {
        if (width < 480) {
            return <MobileView/>
        }else if (width > 481 && width < 1024){
            return <DesktopView/>
        }else {
            return <DesktopView/>
        }
    }
    let ContentView = () => {
        return(
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1,delay:0.5, ease:"easeInOut"}}
                className='tabcontent'
                style={{height:"100dvh"}}
            >
                <div className={columnSelect()} style={{height:"100dvh"}}>
                    <div className='flexpaneldisplay' style={{height:"100%"}}>
                        <Image 
                            src="/thumbnails/turtleisland.jpg"
                            alt="Creation Story"
                            width={imgwidth()}
                            height={imgheight()}
                            style={{objectFit: 'contain'}}
                        />
                    </div>
                    <div className='flexpaneldisplay' style={{height:"100%"}}>
                        <div className='apptxtFrontW' style={{width:"100%"}}>
                            <h2>
                                munto ka-kee-osi-tat
                            </h2>
                            <h2>
                                Creation    
                            </h2>
                            <h2>
                                ta-tuho-lee
                            </h2>
                        </div>
                        <div className='row1fr1fr44r4' style={{width:"100%"}}>
                            <div className='flexpaneldisplay'>                         
                                <Image
                                    src="/thumbnails/Jeff.jpg" 
                                    alt="MenuBKG"
                                    width={150}
                                    height={150}
                                    quality={90}
                                />
                                <div className='topLayeritembtn' style={{marginTop:"5px"}}>                         
                                    <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}
                                        style={{width: '100%', height: '100%'}}
                                    >
                                        <h1 className='apptextB'>Jeff Wastesicoot</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </motion.div>
        );
    }
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, ease:"easeInOut"}}
        >
            <div className="bklink">
                <Link 
                    href={{
                        pathname: backSelect(),
                        query: {
                            keyword: 'activeview'
                        }
                    }}
                >
                    <div className="bkbtn">
                        <p>Back</p>   
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <BKGSelector/>
            </div>
            {activeTab === 1 && <Viewdefault/>}
            {activeTab === 2 && <ContentView/>}
            {activeTab === 3 && <ViewSelector/>}
        </motion.div>
    );
}
export default Storycontent;
