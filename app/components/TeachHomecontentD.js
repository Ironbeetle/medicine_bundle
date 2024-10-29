'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function TeachHomecontentD(){
    const [activeTab, setActiveTab] = useState(1);
    const PrayerView = () => {
        return (
            <>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className='flexpaneldisplay' 
                    style={{height:"100%"}}
                >
                    <div className='topLayeritemTextD'>
                        <div className='apptxtTitlesW'>
                            <h2>
                                Thank You Creator<br/>
                                for blessing me with another day to continue,<br/>
                                Walking, Learning and Living The Good Life,<br/>
                            </h2>
                            <h2>
                                Thank you for giving me insight on how <br/>I treat myself, and to see good in others
                            </h2>
                            <h2>
                                In your blessed name Amen
                            </h2>
                        </div> 
                    </div>
                </motion.div>
            </>
        );
    }
    const Ininew = () => {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: 'easeInOut'}}
            >
                <div className='GroupTop parallaxgroup'>
                   <div className='circlecontainteach'>
                        <div className="quarterul">
                            <div className='qulpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/Sacred_Teachings'
                                    className="apptextB" 
                                    style={{textDecoration:'none',width:"100%", height:"100%"}}
                                >
                                    <Image
                                        src="/Thunderbirdicon.png"
                                        alt="MenuBKG"
                                        width={125}
                                        height={125}
                                        loading='lazy'
                                        quality={90}
                                        style={{marginLeft: "10%", marginTop: "25%"}}
                                    />
                                    <h2>Sacred Teachings</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="quarterur">
                            <div className='qurpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/Natural_Laws'
                                    className="apptextB" 
                                    style={{textDecoration:'none',width:"100%", height:"100%"}}
                                >
                                    <Image
                                        src="/Socialicon.png"
                                        alt="MenuBKG"
                                        width={125}
                                        height={125}
                                        loading='lazy'
                                        quality={90}
                                        style={{marginRight: "10%", marginTop:"25%"}}
                                    />
                                    <h2>Natural Laws</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="quarterll">
                            <div className='qllpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/6_Seasons'
                                    className="apptextB" 
                                    style={{textDecoration:'none',width:"100%", height:"100%"}}
                                >
                                    <h2>Our 6 Seasons</h2>
                                    <Image
                                        src="/StoriesII.png"
                                        alt="MenuBKG"
                                        width={125}
                                        height={125}
                                        loading='lazy'
                                        quality={90}
                                        style={{marginLeft: "15%",marginBottom:"30%"}}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="quarterlr">
                            <div className='qlrpos' style={{height:"100%"}}>
                                <Link 
                                    href='/pages/Creation_Story'
                                    className="apptextB" 
                                    style={{textDecoration:'none',width:"100%", height:"100%"}}
                                >
                                    <h2>Creation Story</h2>
                                    <Image
                                        src="/IslandTurtle.png"
                                        alt="MenuBKG"
                                        width={150}
                                        height={150}
                                        loading='lazy'
                                        quality={90}
                                        style={{marginRight: "8%",marginBottom:"25%"}}
                                    />
                                </Link>
                            </div>    
                        </div>   
                   </div>
                </div>
            </motion.div>
        )
    }
  
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
        >
          
            <div className="bkgcontainer">
                <video autoPlay loop className='videobkg'>
                    <source src="/TradTeachBKG.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 1, ease: 'easeInOut'}}
            >
                <div className='splitpanelTeachLeft'>
                    {activeTab === 1 && <PrayerView/>} 
                    {activeTab === 2 && <Ininew/>} 
                </div>
                <div className='splitpanelTeachRight'>
                    <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                        <div className='topLayeritemRight'> 
                            <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}
                                style={{width: '100%', height: '100%', boxSizing: 'border-box'}}
                            >
                                <div className="apptextB">
                                    <h3>Prayer</h3>
                                </div>
                            </button>
                        </div>
                        <div className='topLayeritemRight'> 
                            <Link 
                                href='/pages/VideoGalleryD'
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <div className="apptextB">
                                    <h3>Program Videos</h3>
                                </div>
                            </Link>
                        </div>
                        <div className='topLayeritemRight'> 
                            <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}
                                style={{width: '100%', height: '100%'}}
                            >
                                <div className="apptextB">
                                    <h3>Fundamentals</h3>
                                </div>
                            </button>
                        </div>
                        <div className='topLayeritemRight'>
                            <Link 
                                href='/pages/MedicineJourneyD'
                                style={{textDecoration:'none',width:"100%", height:"100%"}}
                            >
                                <div className="apptextB">
                                    <h3>Medicine Journey</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
               </div>
            </motion.div>
        </motion.div>
    );
}
