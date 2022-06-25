


let posts=[
    {
        title:"js",
        id:1,
        autherId:1
     },
    {
        title:"css",
        id:2,
        autherId:2
    },
    {
        title:"angular",
        id:3,
        autherId:3
    },
    {
        title:"mangoDb",
        id:4,
        autherId:4
    },
    {
        title:"nodeJs",
        id:5,
        autherId:5
    },
    {
        title:"express",
        id:8,
        autherId:8
    }
]

 
const auther=[
    {name:"smith",id:1},
    {name:"soham",id:2}, 
    {name:"sachin",id:3},
    {name:"sangram",id:4},
    {name:"sachin",id:5},
    {name:"raju",id:6}
]

// function getData(getId){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout (()=>{

//        let post=posts.find(p=>{
//         return p.id===getId;
//        })
       
       
//        if(post){
//         resolve(post)
//        }else{
//         reject(Error("no id present"))
//        }
        

//         },1000)
//     })
//     return promise;
// }



// function getAuther(post){
//     let promise1=new Promise((resolve,reject)=>{
    
//      setTimeout(() => {
//         let autherD=auther.find(a=>{
//            return post.autherId===a.id;
//         })
//         if(autherD){
//             resolve(autherD)
//         }else{
//             reject(Error("no auther"))
//         }
       
//      }, 2000);

//     })
//     return promise1
// }


// getData(5)
//         .then(res=>{
//             console.log(res)
//           return  getAuther(res);   
//         })
//         .then(console.log)
//         .catch(console.log)



// // getAuther(posts[5])
// //         .then(console.log)
// //         .catch(console.log)







function getData(getId){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
       let post=posts.find(p=>{
        return p.id===getId;
       })
       
    //   console.log(post)
    if(post){
        resolve(post)
    }else{
        reject(Error("there is no any data"))
    }
       
        },1000)

    })
    return promise;
}

// getData(1)
//         .then(res=>{
//             console.log(res)
//             // console.log
//         })
//         .catch(console.log)



function getAuther(post){
    let autPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let authers=auther.find(a=>{
            return post.id===a.id
           })
           if(authers){
            // console.log(authers)
            resolve(authers)
           }else{
            reject(Error("there is no auther "))
           }
          
        },2000)
    })
    return autPromise;
}




//chening in promise

// getData(8)
//             .then(res=>{
//                 console.log(res)
//                 return getAuther(res)
//             })
//             .then(console.log)
//             .catch(console.log)
//assyncronus java//asyincawait 


async function init(){
    let data=await getData(5)
    console.log(data)
    let dataA=await getAuther(data)
    console.log(dataA)
}
init();


// try/catch for handling error

// async function init(){
//     try{let data=await getData(66)
//     console.log(data)
//     let dataA=await getAuther(data)
//     console.log(dataA)
//     }catch(err){
// console.log(err)
//     }
// }
// init();







function getDeveloper(getdEV){
    let dev=new Promise((resolve,reject)=>{
        setTimeout(()=>{
             const angular="angular";
            if(getdEV==="angular"){
                resolve(getdEV)
            }else{
                reject(Error("call fails"))
            }
        },1000)
    })
    return dev;
}

// getDeveloper("angular")
//                  .then(res=>{
//                     console.log(res)
//                  })
//                  .catch(console.log)

function slectCandidate(getdEV){
    let promise2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
             const interview="success";
           if(interview==="success"){
            resolve(interview)
           }else{
            reject(Error("candidate not select"))
           }

        },2000);
    })
    return promise2
}

// getDeveloper("nodejs")

// .then(console.log)
// .catch(console.log)

getDeveloper("angular")
                 .then(res=>{
                    console.log(res)
                    return slectCandidate(res)

                 })
                 .then(console.log)
                 .catch(console.log)












