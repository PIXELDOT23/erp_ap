// Import Modules
import { Routes, Route } from "react-router-dom";

// Import Hooks
import { useUser } from "../../Hooks/useUser.js";

// Import Components
import AppViewList from "./AppViewList.jsx";
import ProfilePage from "../ProfilePage.jsx";
import Profile from "../../components/Profile.jsx";
import Loading_Screen from "../../components/Loading_Screen.jsx";

const AppArea = () => {

    const { user} = useUser();

    if (!user) return <Loading_Screen />;

    return (
        <div>
            <section className="h-screen justify-center items-center mx-10 my-2">
                <Profile letter={user.user[0]} name={user.user} designation={user.role} />

                <div className="my-6">
                    <Routes>
                        <Route path='/profile_page' element={<ProfilePage username={user.user} email={user.email} phone={user.phone} designation={user.role} />} />
                        <Route path='' element={<AppViewList />} />
                    </Routes>
                </div>
            </section>
        </div>
    );
};

export default AppArea;