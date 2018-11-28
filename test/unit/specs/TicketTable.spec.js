import Vue from 'vue';
import TicketTable from '@/components/TicketTable';

describe('TicketTable.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TicketTable);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.text-warning h5').textContent)
      .to.equal('Unresolved Tickets');
  });
});
