var axios = require('axios')

//es6 ~~ javascript 2017
//valiable  const let finally
 
// const numbers = [2,3,4,5,6]
// let result = []
// console.log(result) // [4,6,8,10,12]
// const res = numbers.map(number => {
// 	return number*2
// })
// console.log(res)
// let obj1 = { a: 1, b: 2 }
// let obj2 = { c: 3, d: 4 }
// console.log({ ...obj1, ...obj2 }) // {"a":1,"b":2,"c":3,"d":4}

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// console.log([...arr1, ...arr2]) // [1,2,3,4,5,6]
console.log("###############################################################################################################")
//1
const a = () => {
// สั่งงานนาย B แจกบัตร b01
axios.get('https://jsonplaceholder.typicode.com/users')
.then((result) => {
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
		let result2 = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
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
c()
// d()
// e()