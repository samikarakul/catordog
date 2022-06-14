import {Cutie} from "./types/interfaces"

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("X-Api-Key", process.env.SECRET_API_KEY!)
requestHeaders.set('Content-Type', 'application/json')

export async function GetCats(){
    let cats = await fetch("https://api.api-ninjas.com/v1/cats?shedding=3", {
                method: "GET",
                headers: requestHeaders,
            }).then(res => res.json()).catch(err => console.log(err))

    console.log(process.env.SECRET_API_KEY)
    cats = cats.map((c:Cutie) => {
        return {
            url: c.name.split(" ").join("-").toLowerCase(),
            name: c.name,
            image_link: c.image_link
        };
    })
    return cats;
}
export async function GetCatByName(name:string | undefined){
    let cat = await fetch("https://api.api-ninjas.com/v1/cats?name="+name, {
                method: "GET",
                headers: requestHeaders,
            }).then(res => res.json()).catch(err => console.log(err))

    return {
        name: cat[0].name,
        image_link: cat[0].image_link
    };
}

export async function GetDogs(){
    let dogs = await fetch("https://api.api-ninjas.com/v1/dogs?shedding=2", {
                method: "GET",
                headers: requestHeaders,
            }).then(res => res.json()).catch(err => console.log(err))

    dogs = dogs.map((c:Cutie) => {
        return {
            url: c.name.split(" ").join("-").toLowerCase(),
            name: c.name,
            image_link: c.image_link
        };
    })
    return dogs;
}

export async function GetDogByName(name:string |undefined){
    let dog = await fetch("https://api.api-ninjas.com/v1/dogs?name="+name, {
                method: "GET",
                headers: requestHeaders,
            }).then(res => res.json()).catch(err => console.log(err))

    return {
        name: dog[0].name,
        image_link: dog[0].image_link
    };
}
