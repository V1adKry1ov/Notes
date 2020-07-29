<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          

          <message 
            v-if="mess" 
            :messageText="mess"
          />

          <newNote 
            :note="note"
            @addNote="addNote"
          />
          
          <div class="note-header" style="margin: 36px">
            <h1>{{ title }}</h1>
            <search :value="search" placeholder="Найти заметку" @search="search = $event"/>

            <div class="icons">
              <svg :class="{ active: grid }" @click="grid=true" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid=false" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
          
          <notes 
            :notes="notesFilter"
            :grid="grid"
            @remove="removeNote"
          />
          
        </div>
      </section>
    </div>
  </div>
  
</template>

<script>

import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search'

export default { 
  components: {
    message,
    newNote,
    notes,
    search
  },
  data() {
    return {
      title: 'Заметки',
      search: '',
      mess: null,
      grid: true,
      note: {
          title: '',
          desc: '',
          priority: 'standart'
      },
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
    }
  },
  computed: {
    notesFilter() {
      let array = this.notes,
          search = this.search

      if(!search) return array

      search = search.trim().toLowerCase()
      array = array.filter(function (item) {
        if(item.title.toLowerCase().indexOf(search) !== -1){
          return item
        }
      })

      // Error
      return array
    }
  },
  methods: {
    addNote() {
        let {title, desc, priority} = this.note

        if(title === '') {
            this.mess = 'Имя заметки не может быть пустым'
            return false 
        }

        this.notes.push({
            title,
            desc,
            priority,
            date: new Date(Date.now()).toLocaleString()
            
        })
        this.note.title = ''
        this.note.desc = ''
        this.note.priority = 'standart'
        this.mess = null
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
