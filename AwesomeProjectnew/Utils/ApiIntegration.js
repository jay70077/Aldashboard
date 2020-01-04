import axios from 'axios';

export default {
    dashboardApi(){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/dashboard'
        });
    },

    filterData(value){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/dashboard/get-stats?sel_type=m&bu='+value
        });
    },
    filterTarget(value){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/dashboard/get-stats?sel_type=m&target_au='+value
        });
    },
    filterUser(value){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/dashboard/get-stats?sel_type=m&users='+value
        });
    },
    trainGraph(){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/reports/get/participants/trainings'
        });
    },
	trainGraphWithParams(){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/reports/get/trainings/ajax?uid=1&month=6&year=2019'
        });
    },
    trainGraphF2FZoom(){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/reports/get/trainings'
        });
    },
	trainGraphF2FZoomWithParams(){
        return axios({
            method: 'get',
            url: 'http://ec2-52-87-187-122.compute-1.amazonaws.com/api/v1/reports/get/participants/trainings/ajax?uid=1&month=6&year=2019'
        });
    }
	
	
	
	
	
	
}