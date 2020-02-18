import moment from 'moment';

export const filters = {
  text: '',
  judge: 'hackerrank',
  tags: {
    stack: true,
    array: true,
    tree: true
  },
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export const altFilters = {
  text: '',
  judge: '',
  tags: {},
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
