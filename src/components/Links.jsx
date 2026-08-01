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
            <div className='border-2 h-12 flex items-center px-2'>
                <button value={'linkedin'} onClick={myLinks}>
                    <IoLogoLinkedin
                    size={25}
                    className='cursor-pointer transition duration-150 hover:text-blue-600'
                    />
                </button>
                <button value={'github'} onClick={myLinks} className='w-48'>
                    <FaGithubSquare
                    size={25}
                    className='cursor-pointer transition duration-150 hover:text-blue-600'
                    />
                </button>
            </div>
        </>
    )
}

export default Links