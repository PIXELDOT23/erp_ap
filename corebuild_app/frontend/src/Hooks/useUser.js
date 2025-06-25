// Import Modules
import { create } from "zustand/react";


// User Hooks
const useUser = create((set) => ({
    user: null,
    loading: false,
    checkAuth: true,
}));


export default useUser;