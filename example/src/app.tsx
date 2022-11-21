
import { request, regexes, getFieldsByPath, deduplicate } from '../../src/index';



request.setDefaultCredential('same-origin');
// request.setDefaultAPIHost(() => 'https://yapi.tmindte3ch.com/mock/127/');
// request.setDefaultHeader('orgId', () => 11);
request.setDefaultErrorHandler((options, res, err) => {
  console.log('global onError', options, res, err);
  return false;
});
(async function Test() {
  const [err, ret] = await request.download({ url: 'http://localhost:9002/tmind_font.js', path: '' }, 'fa.xlsx');
  console.log('wait res --- ', err, ret);
})();

// const data = { a: [2, 1], b: { b: 2, a: 1 }, c: "123" };
// const org = { a: [1, 2], b: { a: 1, b: 2 }, c: "1223" };

// console.log(deduplicate(data, org));

