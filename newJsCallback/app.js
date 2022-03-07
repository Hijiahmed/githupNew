// let users = ['hiji','ahmed','outhman']
// let addUser= new Promise((resolve,reject)=>{ 
//         users.push('lujain')
//         resolve(users)
// })
//
// addUser.then(resolve=>{
//     console.log("new user added to the array");
//     console.log(resolve);
// }).catch(err=>{
//     console.log("error :" + err);
// })
//
// let num = [4,3,8]
// const addnum= new Promise((resolve,reject)=>{
//         num.push(7)
//         resolve(num)
// })
// addnum.then(resolve =>{
//     for (let i = 0; i < num.length; i++) {
//         if( num[i] % 2==0){
//             console.log(num[i],'even');
//             }else if(num[i] % 2==1){
//             console.log(num[i],'odd');
//             }
//     }
// }).catch(err=>{
//     console.log('error :'+err);
// })
//
// let fs = require("fs")
//
// let str =`my first file`
// // `` نستخدمها بكتابة نص كبير 
// fs.writeFile('./text.txt', str ,err=>{
//     if(err){
// console.log('error :'+err);
//     }else{
//         console.log('file created');
//     }
// })
//
// fs.readFile('./text.txt', 'utf-8' ,(err,data)=>{
//     if(err){
//         console.log("error :"+err);
//     }else{
//         console.log(data);
//         let key = 'hiji oehrq9asjeq8jg08eruqa8wupas0uqw[a';
//         let encryptor = require('simple-encryptor')(key);
//         let encrypted = encryptor.encrypt(data);
//         console.log('encrypted: %s', encrypted);
//     }
// })
//
