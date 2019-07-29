import axios from 'axios';

export default {
    dashboardApi(){
        return axios({
            method: 'get',
            url: 'http://ec2-54-86-165-209.compute-1.amazonaws.com/api/v1/dashboard'
        });
    }
}