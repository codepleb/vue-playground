const EventBus = new Vue();

const inputComponent = {
    template: `<input 
        :placeholder="placeholder"
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small"
        type="text" />`,
    props: ['placeholder'],
    data() {
        return {
            input: ''
        }
    },
    methods: {
        monitorEnterKey() {
            EventBus.$emit('add-note', {
                note: this.input,
                timestamp: new Date().toLocaleDateString()
            });
            this.input = '';
        }
    }
};

new Vue({
    el: '#app',
    data: {
        notes: [],
        timestamps: [],
        placeholder: 'Enter a note'
    },
    created() {
        EventBus.$on('add-note', event => this.addNote(event));
    },
    methods: {
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
        }
    },
    components: {
        'input-component': inputComponent
    },
});
