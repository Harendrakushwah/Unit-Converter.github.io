function len(){
    let val1 = document.getElementById("take").value;
    let val2 = document.getElementById("assign").value;
    let inp1 = document.getElementById("demo")
    let inp2 = document.getElementById("inc")
    if(val1===val2){
        alert(`if your are converting ${val1} into ${val2} you will get the same answer`)
    }

    if(val1==="meter" && val2==="foot"){
        inp2.innerText = inp1.innerText * 3.28084
    }

    else if(val1==="meter" && val2==="cm"){
        inp2.innerText = inp1.innerText * 100
    }

    else if(val1==="foot" && val2==="meter"){
        inp2.innerText = inp1.innerText/3.281
    }

    else if(val1==="foot" && val2==="cm"){
        inp2.innerText = inp1.innerText * 30.48
    }

    else if(val1==="cm" && val2==="foot"){
        inp2.innerText = inp1.innerText/30.48
    }

    else if(val1==="cm" && val2==="meter"){
        inp2.innerText = inp1.innerText/100
    }

    let inp3 = /[a-z]/i
    if(inp3.test(x.innerText)===true){
        alert("Enter valid number")
    }
}

function getceli(){
    let x = document.getElementById("celi")
    let y = document.getElementById("fah")
    y.innerText = ((x.innerText)*9/5) + 32

    let inp3 = /[a-z]/i
    if(inp3.test(x.innerText)===true){
        alert("Enter valid number")
    }
}

function getfah(){
    let x = document.getElementById("celi")
    let y = document.getElementById("fah")
    x.innerText = (y.innerText-32)*5/9

    let inp3 = /[a-z]/i
    if(inp3.test(y.innerText)===true){
        alert("Enter valid number")
    }
}

function getgram(){
    let x = document.getElementById("kilo")
    let y = document.getElementById("gram")
    y.innerText = x.innerText*1000

    let inp3 = /[a-z]/i
    if(inp3.test(y.innerText)===true){
        alert("Enter valid number")
    }
}

function getkg(){
    let x = document.getElementById("kilo")
    let y = document.getElementById("gram")
    x.innerText = y.innerText/1000

    let inp3 = /[a-z]/i
    if(inp3.test(y.innerText)===true){
        alert("Enter valid number")
    }
}