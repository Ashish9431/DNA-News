let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }


 import { navbar } from "./components/header.js";

 get("div1").innerHTML = navbar();





 import {footer} from "./components/footer.js";
 get("importfooter").innerHTML= footer();


 
 let results = async(value) => {

    console.log("hi")
    
        try {
            let res = await fetch('https://newsapi.org/v2/everything?q=Celebrity&from=2022-05-17&sortBy=publishedAt&apiKey=c557edb2a21347db92f1525e37b143ba')
    
            let data = await res.json()
    
            // console.log(data)
    
            let getdata = data.articles;
            // console.log("getdata", data.articles);
    
            document.getElementById("datadiv").innerHTML = null;
            getdata.forEach(function(el) {
    
                let div = creat("div")
                div.id="databox"
    
                let img = creat("img")
              
                img.src = el.urlToImage;
                img.id="data1"
    
                let title = creat("p")
    
    
                title.innerText = el.title
    
                title.id="data3"
    
                let url = creat("h5")
    
                url.setAttribute("id", "url")
    
                url.innerText = el.url;
    
                url.id="data4"
    
               
                div.append(img,  title)
    
                document.getElementById("datadiv").append(div)
    
    
            })
    
        } catch (err) {
            console.log(err)
        }
    }
    
    results()