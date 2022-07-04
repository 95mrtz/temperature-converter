import Github from "../../icon/Github"
import Twitter from "../../icon/Twitter"
import Linkedin from "../../icon/Linkedin"


const Icons = () => {
    return ( 
        <div className="flex flex-row justify-around items-center">
           <a href="https://github.com/hctmanuelortiz" target="_blank" rel="noreferrer" className="mx-2 md:mx-5"><Github /></a>
           <a href="https://twitter.com/hctmanuelortiz" target="_blank" rel="noreferrer" className="mx-2 md:mx-5"><Twitter /></a> 
           <a href="https://www.linkedin.com/in/hctmanuelortiz/" target="_blank" rel="noreferrer" className="mx-2 md:mx-5"><Linkedin /></a>  
        </div>
     );
}
 
export default Icons;