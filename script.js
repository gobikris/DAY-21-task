function call (element,cname){
    let ele = document.createElement(element);
    ele.className = cname;

    return ele;
}

let divTag = call("div","container");

let rowTag = call("div","row");

let colTag = call("div","col");


let spanTag = document.createElement("span");
spanTag.innerHTML = "10";

document.body.append(divTag);

divTag.append(rowTag);
rowTag.append(colTag);
colTag.append(spanTag);


let count = 10;
// main
     setTimeout(()=>{
        count = count-1;
        spanTag.innerHTML = count;
        setTimeout(()=>{
            count = count-1;
            spanTag.innerHTML = count;
            setTimeout(()=>{
                count = count-1;
                spanTag.innerHTML = count;
                setTimeout(()=>{
                    count = count-1;
                    spanTag.innerHTML = count;
                    setTimeout(()=>{
                        count = count-1;
                        spanTag.innerHTML = count;
                        setTimeout(()=>{
                            count = count-1;
                            spanTag.innerHTML = count;
                            setTimeout(()=>{
                                count = count-1;
                                spanTag.innerHTML = count;
                                setTimeout(()=>{
                                    count = count-1;
                                    spanTag.innerHTML = count;
                                    setTimeout(()=>{
                                        count = count-1;
                                        spanTag.innerHTML = count;
                                        setTimeout(()=>{
                                            count = count-1;
                                            spanTag.innerHTML = count;
                                            setTimeout(()=>{
                                                count = count-1;
                                                spanTag.innerHTML = "HAPPY INDEPENDENCE DAY";
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);





