import { createStore } from 'vuex'
import {mapState} from 'vuex'

export default createStore({
    state: {
        list: [],
        num: [],
    },
    mutations: {
        addList(state, item) {
            console.log('is addlist item proxy?',typeof(item));
            console.log(item.Proxy);
            if (state.list.length == 0) {
                state.list.push(item);
                state.num[0]=1;
                console.log(1);
            } else {
                var isSame=false;
                for (var i = 0; i < state.list.length; i++) {
                    if (item.productId == state.list[i].productId) {
                        state.num[i]++;
                        isSame=true;
                        console.log(2);
                        break;
                    } 
                }
                if(!isSame){
                    state.list.push(item);
                    state.num[state.list.length - 1] = 1;
                    console.log(3);
                }
            }
            
        },
        subListItem(state,index){
            state.list.splice(index,1);
        },
        addNum(state,index){
            state.num[index]++;
        },
        subNum(state,index){
            if(state.num[index]>1){
                state.num[index]--;   
            }else{
                this.commit("subListItem",index);
                this.commit("subNumItem",index);
            }       
             
        },
        subNumItem(index){
            state.num.splice(index,1);
        }
    },
    actions: {
    },
    modules: {
    }
})
