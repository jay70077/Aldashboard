import axios from 'axios';

export default {
    dashboardApi(){
        return axios({
            method: 'get',
            url: 'http://ec2-54-86-165-209.compute-1.amazonaws.com/api/v1/dashboard'
        });
    },

    filterData(value){
        return axios({
            method: 'get',
            url: 'http://ec2-54-86-165-209.compute-1.amazonaws.com/api/v1/dashboard/get-stats?sel_type=m&bu='+value
        });
    },
    filterTarget(value){
        return axios({
            method: 'get',
            url: 'http://ec2-54-86-165-209.compute-1.amazonaws.com/api/v1/dashboard/get-stats?sel_type=m&target_au='+value
        });
    },
    filterUser(value){
        return axios({
            method: 'get',
            url: 'http://ec2-54-86-165-209.compute-1.amazonaws.com/api/v1/dashboard/get-stats?sel_type=m&users='+value
        });
    },
    trainGraph(){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/reports/get-trainings-for-id-for-graph?uid=2&month=6&year=2019'
        });
    }
}