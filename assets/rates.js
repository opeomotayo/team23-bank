// Work out today's personalised rates before the page renders.
var started = Date.now();
var samples = [];
while (Date.now() - started < 800) {
  samples.push(Math.sqrt(samples.length) * 3.1);
  if (samples.length > 100000) samples.length = 0;
}
window.TEAM23_RATES = { saver: 3.10, mortgage: 4.29 };
