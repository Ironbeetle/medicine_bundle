import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import ComehomeBKG from '../../../public/TradTeachingsBKG.jpg';

const db = new PrismaClient();

function page(){

    let ContentView = () => {
        return(
            <div className='flexpaneldisplay'>
               <div style={{width:"50vw"}}>
                    <div className="listitemapp" style={{marginBottom:"1rem"}}>
                        <Link href={'/pages/Medicine_Journey/' +'goodlife'} className="apptext" 
                            style={{textDecoration:'none',width:"100%", height:"100%"}}
                        >
                            <h1>The Good Life</h1>
                        </Link>
                    </div>
                    <div className="listitemapp" style={{marginBottom:"1rem"}}>
                        <Link href={'/pages/Medicine_Journey/' +'findway'}
                            className="apptext" 
                            style={{textDecoration:'none',width:"100%", height:"100%"}}
                        >
                            <h1>Finding Our way</h1>
                        </Link>
                    </div>
                    <div className="listitemapp" style={{marginBottom:"1rem"}}>
                        <Link href={'/pages/Medicine_Journey/' +'dene'} className="apptext" 
                            style={{textDecoration:'none',width:"100%", height:"100%"}}
                        >
                            <h1>Dene Perspective</h1>
                        </Link>
                    </div>      
                    <div className="listitemapp" style={{marginBottom:"1rem"}}>
                        <Link href={'/pages/Medicine_Journey/' +'language'} className="apptext" 
                            style={{textDecoration:'none',width:"100%", height:"100%"}}
                        >
                            <h1>Turning To The Language</h1>
                        </Link>
                    </div>
              </div>
            </div>
        );
    }
    let Viewdefault = () => {
        return(
            <div className='flexpaneldisplay' style={{height:"100dvh"}}>
                <div className='topLayeritemTextD'>
                    <div className='flexpaneldisplayR'>
                        <Image 
                            src="/Mile20btnBKG.jpg" 
                            width={350} 
                            height={350}
                            style={{objectFit: "contain"}}
                            loading='lazy'
                            quality={90}
                            alt="SacredIMGHere1"
                        />
                        <div className='apptxtTitlesW'>
                            <h2>
                                Braiding Our Medicine Journey
                            </h2>
                            <h3>
                                Re-Connecting To The Land<br/>&<br/>
                                Ancestral Knowledge
                            </h3>
                        </div> 
                    </div>
                </div>
                <div className='flexpaneldisplay'>
                    <ContentView/>
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="bklink">
                <Link href='/pages/TeachHome'>
                    <div className="bkbtn">
                        <p>Back</p>   
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <Image
                    src={ComehomeBKG}
                    alt="ComingHomeBKG"
                    fill
                    loading='eager'
                    quality={90}
                />
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 0.5, ease: 'easeInOut'}}
                className='appcontainer'
            >
                <Viewdefault/>
            </motion.div>
        </>
    )
};
export default page;
