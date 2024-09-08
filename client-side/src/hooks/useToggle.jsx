import{ useState } from 'react';

const useToggle = () => {
    const [toggle, setToggle] = useState([])
    const [togglelass, setToggleClass] = useState('')

    const handleToggle=(e)=>{
      // e.target.nextElementSibling.classList.toggle(togglelass);
      e.target.nextElementSibling.classList.toggle('hidden')

  }
      setToggle(handleToggle)
    return [toggle, setToggleClass];
};

export default useToggle;