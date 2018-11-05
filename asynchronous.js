
// const a = async () =>{
// 		await setTimeout(()=>{
// 			console.log("3 sec")
// 		},3000)
// }
// const b =  () =>{
// 		console.log("4 sec")
// }
var axios = require('axios')

//1
const a = () => {
// สั่งงานนาย B แจกบัตร b01
axios.get('https://jsonplaceholder.typicode.com/users')
// อยากได้งานนาย B
.then((result) => {
  // ได้งานมาในตัวแปร result
  console.log(result.data)
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
})
}
//2
const b = () => {
axios.get('https://jsonplaceholder.typicode.com/posts/110').then(result => {
  // ได้งานมาในตัวแปร result
  console.log(result.data)
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
}).catch(err=>{
	console.log("error ja"+ err)
})
}
//3 >>>>> callback hell
const c = () => {
axios.get('https://jsonplaceholder.typicode.com/posts/1').then((result1) => {
  // ได้งานมาในตัวแปร result1
  // สั่งงานต่อ
  console.log(result1.data)
  axios.get('https://jsonplaceholder.typicode.com/posts/2').then((result2) => {
    // ได้งานมาในตัวแปร result2
	// เราจะมี result1 และ result2 ให้ใช้
	console.log(result2.data)
  })
})
}
//4 >>>>> async/await ทำงานแบบเรียงลำดับกัน 
const d = async () =>{
	try {
		let result = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
		let result2 = await axios.get('https://jsonplaceholder.typicode.com/posts/2')
		console.log(result.data)
		console.log(result2)
	}
	// handle error แบบนี้ ทำให้ เวลาจะจับเคสไหน ก็ต้อง trycatch รัวๆ
catch(e){
	console.log(e)
}
}

const e = async () =>{
	let promiss1 =  axios.get('https://jsonplaceholder.typicode.com/posts/1')
	let promiss2 =  axios.get('https://jsonplaceholder.typicode.com/posts/2')

	let result1 = await promiss1
	let result2 = await promiss2
	console.log(result1)
	console.log(result2)
}
 
// a()
// b()
// c()
// d()
// e()