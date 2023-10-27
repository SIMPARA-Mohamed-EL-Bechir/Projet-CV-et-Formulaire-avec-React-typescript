import {BsFillTelephoneFill, BsLinkedin,BsFillFilePersonFill} from 'react-icons/bs' 
import {AiFillMail} from'react-icons/ai'
export const About = () =>{
    return(
        <div>
            <section className="mb-5 flex justify-end bg-amber-600 rounded-r-lg">
                <img className="w-20 h-20 rounded-full" src='public/images/profil.jpg' alt="Profil" />
                <h2 className=" text-3xl text-blue-800 font-extrabold mr-80 mt-20">SIMPARA Mohamed El Béchir</h2>
                <div><i>
                <ul>
                    <li className='flex justify-end'><BsFillFilePersonFill className='mr-2'/><p>19 ans </p></li>
                    <li className='flex justify-end'><BsFillTelephoneFill className='mr-2'/><p>Tel: +212693412499 </p></li>
                    <li className='flex justify-end'><AiFillMail className='mr-2'/><a className='hover:text-[#33E7F2]' href="mailto:simparamohamedelbechir7@gmail.com">simparamohamedelbechir7@gmail.com</a> <br /></li>
                    <li className='flex justify-end'><BsLinkedin className='mr-2'/><a className='hover:text-[#33E7F2]' href="https://www.linkedin.com/in/mohamed-el-b%C3%A9chir-simpara-5a3615288/">Linkedin</a></li>
                </ul>
                </i></div>
                
            </section>
        </div> 
    );
}
