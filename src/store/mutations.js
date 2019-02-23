import state from "./state.js"
import * as types from './mutation-types'
const mutations = {
	[types.ADD](state){
		state.count++
	}
}
export default mutations