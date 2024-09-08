import{ useState } from 'react';

const useShowHide = () => {
    const [showHide, setShowHide] = useState([])

   const handleToggleDesplay =(e)=>{
      e.target.nextElementSibling.classList.toggle('hidden')
    }
      setShowHide(handleToggleDesplay)
    return [showHide];
};

export default useShowHide;