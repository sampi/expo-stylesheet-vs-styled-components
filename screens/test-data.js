const testData = [];

for (let i = 0; i < 10000; i++) {
  testData.push({ name: `tester - ${i}` });
}

export default testData;


const timers = {};
export const myTimer = function(timerName) {
	if (timers[timerName]) {
		console.log(timerName+': '+(Date.now() - timers[timerName])+' ms');
	}
	timers[timerName] = Date.now();
};
