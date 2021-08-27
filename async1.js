const usersDiv=document.querySelector("#users")
window.addEventListener("load",fetchLinks)
const url = "https://jsonplaceholder.typicode.com/users";

let output= "";

async function fetchLinks (url) {
    try {
        const res = await fetch (url);
        if (res.ok){
            const data = await res.json();
            console.log(data);
            
            for(let user of data) {
                output += `
                <div class="user">
                    <ul>
                        <li> ID: ${user.id}</li>
                        <li> Name:${user.name}</li>
                        <li> Email:${user.email}</li>
                        <li> Address:${user.address.city}</li>
                        <li> Phone:${user.phone}</li>
                        <li> Website:${user.website}</li>

                    </ul>
                </div>    
                `;
            }

            console.log (output);

            usersDiv.innerHTML=output;  
        }else {
            throw new Error ("Page not found");
        }
        
    }catch(e) {
        console.log(e);
    }
};

fetchLinks (url);