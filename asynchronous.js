
const a = async () =>{
		await setTimeout(()=>{
			console.log("3 sec")
		},3000)
}
const b = async () =>{
		console.log("4 sec")
}
const result = async () =>{
	await a()
	await b()
}

