import WeatherContainer from '@/components/WeatherContainer';
import {shallow, createLocalVue} from 'vue-test-utils';
import Vuex from 'vuex';

describe('WeatherContainer.vue', () => {
  let wrapper;
  let getters;
  let actions;
  let store;
  let localVue;

  const setUpWrapper = loading => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    getters = {
      location: () => 'New York',
      weatherDescription: () => 'Light Cloud',
      imageAbbr: () => 'lc.png',
      weatherTemp: () => -10.0,
      loading: () => loading
    };

    actions = {
      fetchWeather: sinon.stub()
    };

    store = new Vuex.Store({
      getters,
      actions
    });

    wrapper = shallow(WeatherContainer, {
      localVue,
      store
    });
  };

});
