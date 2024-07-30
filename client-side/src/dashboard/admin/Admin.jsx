
import useAuth from "../../hooks/useAuth";

const Admin = () => {
    const {user} = useAuth()

    return (
        <div>
           <h2 className="text-exl"> {user?.role}</h2>
           <h2 className="text-exl"> {user?.displayName}</h2>
        </div>
    );
};

export default Admin;