import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
async function BMJPlayer({params}){
    let pid = parseInt(params.id)
    let med_journey = await db.post.findMany({
        where:{
            id: pid
        }
    })
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
                                            <h2>Braiding our Medicine Journey</h2>
                                        </div>
                                    </div>
                                    {med_journey.map((med) =>(
                                    <div className='listitem' key={med.id}>
                                        <div className='row3x listhover'>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={med.thumbimg} 
                                                alt="TeachingsImgHere" 
                                                width={300} 
                                                height={300}
                                             />
                                            </div>
                                            <div style={{width:"100%"}}>
                                                <div className='flexpaneldisplay apptext' style={{height:"100%"}}>
                                                    <Link href={'/pages/VideoPlayer/' + med.id} className='apptext' 
                                                        style={{textDecoration:"none", height:"100%",width:"100%"}}>
                                                        <h2>{med.title}</h2>
                                                        <h3>{med.subtitle}</h3>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={med.thumbnail} 
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
export default BMJPlayer;
