var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");


var websiteContainer ;

if(localStorage.getItem("websites") == null)
{
    websiteContainer = [];
}
else
{
    websiteContainer = JSON.parse( localStorage.getItem("websites"));
    displayListItem();
}

function addURL()
{
   var website = 
   {
    name : siteName.value,
    url : siteUrl.value 
   };
   if((website.name=="") && (website.url==""))
   {
   document.getElementById("nameError").innerHTML = ` <p class="alert alert-error mx-auto my-3" >Name is required</p>`;
   document.getElementById("urlError").innerHTML = ` <p class="alert alert-error mx-auto my-3 "  >Url Field is required</p>`;
   }
   else if(website.name=="")
   {
    document.getElementById("nameError").innerHTML = ` <p class="alert alert-error mx-auto my-3" >Name is required</p>`;
    document.getElementById("urlError").innerHTML = ``;

   }
   else if(website.url=="")
   {
   document.getElementById("nameError").innerHTML = `<p class="alert alert-error mx-auto my-3" >this url already exist</p>`;
   document.getElementById("urlError").innerHTML = ` <p class="alert alert-error mx-auto my-3 "  >Url Field is required</p>`;
   }
   else
   {
    document.getElementById("nameError").innerHTML =``;
    document.getElementById("urlError").innerHTML = ``;
    websiteContainer.push(website);
    localStorage.setItem("websites",JSON.stringify(websiteContainer));
    console.log(websiteContainer);
    clearForm();
    displayListItem();
   }
}


function clearForm()
{
    siteName.value = "";
    siteUrl.value = "";
}

function displayListItem()
{
    var lista = `` ;
    for (var i = 0; i < websiteContainer.length; i++) {
        lista += `<div class="list-item row" id="${websiteContainer[i].name}">
        <h2>${websiteContainer[i].name}</h2>
        <a class="btn btn-primary" href="${websiteContainer[i].url}" target="_blank">visit</a>
        <button class="btn btn-danger btndelete" onclick="deleteListItem(${i})">Delete</button>
        </div>`
        ;
        
    }
    document.getElementById("bookmarkList").innerHTML = lista ;
}

function deleteListItem(ListIndex)
{
    websiteContainer.splice(ListIndex,1);
    localStorage.setItem("websites" ,  JSON.stringify( websiteContainer) );
    displayListItem();
}