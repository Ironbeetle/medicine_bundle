import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
async function TeachingscontentD(){
   let sacred = await db.post.findMany({
        where:{
            category:"sacred"
        }
   });
    let ContentView = () => {
        return(
            <>
                <div style={{height:"100dvh"}}>
                    <div className='appcontainer'>
                        <div className='playlist'>
                            <div className='row1fr4fr'>
                                <div></div>
                                <div className='flexpaneldisplay'>
                                    <div className='listitemTop' style={{marginTop:"1rem"}}>
                                        <div className='apptext'>
                                            <h2>The Sacred Teachings</h2>
                                        </div>
                                    </div>
                                    {sacred.map((sac) =>(
                                    <div className='listitem' key={sac.id}>
                                        <div className='row3x listhover'>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={sac.thumbimg} 
                                                alt="TeachingsImgHere" 
                                                width={300} 
                                                height={300}
                                            />
                                            </div>
                                            <div style={{width:"100%"}}>
                                                <div className='flexpaneldisplay apptext' style={{height:"100%"}}>
                                                    <Link href='/pages/VideoPlayback' className='apptext' 
                                                        style={{textDecoration:"none", height:"100%",width:"100%"}}>
                                                        <h2>{sac.title}</h2>
                                                        <h3>{sac.subtitle}</h3>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={sac.thumbnail} 
                                                alt="medicineIMGHere" 
                                                width={300} 
                                                height={300}
                                                style={{justifySelf:"flex-end"}}
                                            />
                                            </div>
                                         
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return(
        <div>
            <div className="bklink">
                <Link href='/pages/TeachHome'>
                    <div className="bkbtn">
                        <p>Back</p>   
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <video autoPlay loop className='videobkg'>
                    <source src="/webm/GalleryversionD.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <ContentView/>
        </div>
    );
}
export default TeachingscontentD;
