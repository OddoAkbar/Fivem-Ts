const Log = (text) => {
    console.log(text);
}

const Text = (text) => {
    Log(text);
    return true;
}

RegisterCommand("piru",(source,args,rawCommand) => {
    console.log("asdasd");
},false);


onNet("event", (asd) => {
    console.log(asd);
})

export { Text };