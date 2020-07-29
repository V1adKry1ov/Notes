<template>
    <div class="new-note">
        <label>Имя заметки</label>
        <input type="text" v-model="note.title">
        <label>Описание заметки</label>
        <textarea v-model="note.desc"></textarea>

        <label style="margin: 2em 0">Выберите приоритет заметки</label>
        <div class="priority">
            <div class="priorityStandart">
                <input type="radio" name="standart" id="standart" value="standart" v-model="note.priority" class="priprityButton"> 
                <p>Стандартный</p>
            </div>
            <div class="priorityImporatnt">
                <input type="radio" name="important" id="important" value="important" v-model="note.priority" class="priprityButton">
                <p>Важный</p>
            </div>
            <div class="priorityVeryImportant">
                <input type="radio" name="veryImportant" id="veryImportant" value="veryImportant" v-model="note.priority" class="priprityButton">
                <p>Очень важный</p>
            </div>
            
            
        </div>

        <button class="btn btnPrimary" @click="addNote">Добавить заметку</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
.new-note {
    text-align: center;
}
.priority {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
    
}
.priprityButton {
    width: auto;
    margin: 0;
}
</style>