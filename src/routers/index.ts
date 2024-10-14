import api from './api';
import responses from './responses';
import surveys from './surveys';

export default () => [
  {
    path: '/api',
    router: api,
  },
  {
    path: '/surveys',
    router: surveys,
  },
  {
    path: '/responses',
    router: responses,
  },
];
