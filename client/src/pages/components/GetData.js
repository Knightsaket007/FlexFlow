import axios from 'axios';
import Cookies from 'universal-cookie';

const GetData = async () => {
    let cookie = new Cookies();
    let user = cookie.get('user').token || "";
    
    if (user) {
        try {
            const response = await axios.post('https://flexflow-server.onrender.com/auth/getProfile', {
                user
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null; // or handle the error in a different way
        }
    } else {
        console.error('User token not found in cookies');
        return null; // or handle the absence of user token in a different way
    }
};

export default GetData;
