
const a = () =>{
	return new Promise ((resolve,reject)=>{
		setTimeout(()=>{
			resolve(console.log("3 sec"))
		},3000)	
	})
}
const b = () =>{
	console.log("4 sec")
}
a().then(()=> b())
