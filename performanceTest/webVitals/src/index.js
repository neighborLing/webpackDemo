import {
  getCLS,
  getLCP,
  getFID
} from 'web-vitals';

function sendToAnalytics(metric) {
  const { name } = metric;
  console.log(name + ' metric: ', metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
