import axios from 'axios';

export default axios.create({
    baseURL:'http://35.175.216.33:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
