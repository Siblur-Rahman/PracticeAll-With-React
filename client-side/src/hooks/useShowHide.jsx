import{ useState } from 'react';

const useShowHide = () => {
    const [showHide, setShowHide] = useState([])

    const handleDesplay=(e)=>{
      // if(desplay==='hidden') {setDesplay('')}else{setDesplay('hidden')}
      e.target.nextElementSibling.classList.toggle('hidden')
  }
      setShowHide(handleDesplay)
    return [showHide];
};

export default useShowHide;