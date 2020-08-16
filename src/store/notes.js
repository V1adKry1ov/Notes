export default {
    state: {
        notes: [
            {
                title: 'First Note',
                desc: 'Description for fisrt note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'standart'
            },
            {
                title: 'Second Note',
                desc: 'Description for second note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'important'
            },
            {
                title: 'Third Note',
                desc: 'Description for third note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'veryImportant'
            }
        ]
    },
    mutations: {  
        addNote(state, payload) {
            state.notes.push(payload)
        },
        removeNote(state, payload) {
            state.notes.splice(payload, 1)
        }
    },
    actions: {
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    }
}