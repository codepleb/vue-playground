const ButtonRow = {
  template: `
    <div>
      <button @click="onButtonClick" class="ui button" name="button-hoodie" value="fullstack-hoodie">Hoodie</button>
      <button @click="onButtonClick" class="ui button" name="button-tee" value="fullstack-tee">Tee</button>
      <button @click="onButtonClick" class="ui button" name="button-fitted-cap" value="fullstack-fitted-cap">Fitted Cap</button>
      <button @click="onButtonClick" class="ui button" name="button-jacket" value="fullstack-jacket">Jacket</button>
    </div>`,
  methods: {
    onButtonClick(evt) {
      const button = evt.target;
      console.log(`The user clicked ${button.name}: ${button.value}`);
    },
  }
};

new Vue({
  el: '#app',
  components: {
    'button-row': ButtonRow
  }
});