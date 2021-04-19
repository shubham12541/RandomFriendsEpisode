import s1_json from './data/1.json';
import s2_json from './data/2.json';
import s3_json from './data/3.json';
import s4_json from './data/4.json';
import s5_json from './data/5.json';
import s6_json from './data/6.json';
import s7_json from './data/7.json';
import s8_json from './data/8.json';
import s9_json from './data/9.json';
import s10_json from './data/10.json';


export class DataService {

    allData:any[];

    constructor(){
        this.allData = [...s1_json, ...s2_json, ...s3_json, ...s4_json, ...s5_json, 
            ...s6_json, ...s7_json, ...s8_json, ...s9_json, ...s10_json];
    }

    getRandomEpisodeData(){
        const random = Math.floor(Math.random() * this.allData.length );
        return this.allData[random];
    }
}


