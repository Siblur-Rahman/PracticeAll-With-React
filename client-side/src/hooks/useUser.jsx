import { useState } from "react";

const useUser = (cuser) => {
const [user, setUser] = useState(cuser);

return [user, setUser]
}

export default useUser;