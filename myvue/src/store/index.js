import { createStore } from 'vuex'
import {mapState} from 'vuex'

export default createStore({
    state: {
        list: [],
        num: [],
        test:['a','b','c']
    },
    mutations: {
        addList(state, goods) {
            console.log('------------',goods);
            if (state.list.length == 0) {
                state.list.push(goods);
                state.num[0]=1;
            } else {
                var isSame=false;
                for (var i = 0; i < state.list.length; i++) {
                    if (goods.productId == state.list[i].productId) {
                        state.num[i]++;
                        isSame=true;
                        break;
                        console.log(1);
                    } 
                }
                if(!isSame){
                    state.list.push(goods);
                    state.num[state.list.length - 1] = 1;
                    console.log(2);
                }
            }
            console.log('list', state.list);
            console.log(state.num);
        }
    },
    actions: {
    },
    getters:{
        getlist(){
            return state.list
        }
    },
    modules: {
    }
})
