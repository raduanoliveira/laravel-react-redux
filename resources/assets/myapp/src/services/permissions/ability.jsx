import {Ability, AbilityBuilder} from '@casl/ability'
import store from '../../main/store'

function subjectName(item){
    if(!item || typeof item === 'string'){
        return item
    }
    return item.__type
}

const ability = new Ability([], {subjectName})

let currentAuth
store.subscribe( ()=> {
    const prevAuth = currentAuth
    currentAuth = store.getState().loginReducer
    if(prevAuth !== currentAuth){
        ability.update(defineRulesFor(currentAuth))
    }
})

function defineRulesFor(auth){
    if(auth.user){
        let roles = auth.user.roles
        let user = roles.filter(e=> e.name === 'user').length > 0;
        let admin = roles.filter(e=> e.name === 'admin').length > 0;
        const {can, cannot, rules} = new AbilityBuilder()
        if(user){
            cannot('view', 'Profile')
        }
        if(admin){
            can('manage','all')
        }
        return rules
    }
    return false

}

export default ability