//your JS code here. If required.


async function getMessage(){
const text = document.getElementById('text').value;
const time = document.getElementById('delay').value;
const btn = document.getElementById('btn');
const output = document.getElementById('output');
	await setTimeout(()=>{
		output.innerText=text;
	},time);
	
}
