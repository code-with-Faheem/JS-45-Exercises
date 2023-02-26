//Pizzas: 


let pizza  = ["veg pizza","meat pizza"," chicken pizza"]

console.log("pizza's names...")
for(let i=0; i<pizza.length; i++)
{
    console.log(pizza[i])
}

for(let i=0; i<pizza.length; i++)
{
    if(i==0)
    {
            console.log("i love "+pizza[i])
    }
    if(i==1)
    {
        console.log("i like "+pizza[i])
    }
    if(i==2)
    {
        console.log("i don't like "+pizza[i])
    }
}

console.log("i love "+pizza[1]+ "because of meat")
console.log("i am meat eater")
console.log("and meat is also good for health")