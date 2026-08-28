import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

function Links(){

    function myLinks(event){
        const value = event.currentTarget.value

        if(value === 'linkedin'){
            window.open('https://www.linkedin.com/in/lucassantdev/')
        }else{
            window.open('https://github.com/lucassantDev')
        }
    }

    return(
        <>
            <div className='h-12 flex items-center px-2 bg-slate-900 md:justify-center'>
                <button value={'linkedin'} onClick={myLinks} className='md:w-24 md:flex md:items-end md:justify-center'>
                    <IoLogoLinkedin
                    size={35}
                    className='text-slate-300 cursor-pointer transition duration-150 hover:text-blue-600'
                    />
                </button>
                <button value={'github'} onClick={myLinks} className='w-48 md:w-24 md:flex md:items-start md:justify-center'>
                    <FaGithubSquare
                    size={31}
                    className='text-slate-300 cursor-pointer transition duration-150 hover:text-blue-600'
                    />
                </button>
            </div>
        </>
    )
}

export default Links