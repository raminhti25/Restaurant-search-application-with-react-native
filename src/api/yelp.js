import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 9HvfuUhiakBphbGznxDJbJyYegmATa5TpG9dQ81QFh3fGJN0kvp4TSlxXQ924Dd3XEH79tKOwC4pcfyn9qVms8g_2odywK8Q8OoA3Yrs35Ph8hlTRfU8nwSBGM62XnYx' 
    }
}); 