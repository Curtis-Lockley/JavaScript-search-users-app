//Details to connect and retrive data from API
usersAPI = {
    url: "https://jsonplaceholder.typicode.com/users",
    usernameQueryKey: "username" //Example "https://jsonplaceholder.typicode.com/users?username=Bret"
}

function getUser(username) {
    //Gets the user from placeholder API

    return fetch(usersAPI.url + `?${usersAPI.usernameQueryKey}=${username}`)
        //Convert response to JSON
        .then((response) => response.json())

}

function userSearch(event) {

    //Prevent browser from refreshing after function returns
    event.preventDefault()

    //Get Username from user input
    username = document.forms["userForm"]["username"].value
    console.log("Searching for user with the name of: " + username);

    //Search users API to check if user exists
    getUser(username).then((data) => {
        console.log(data)
        
        if (data[0] !== undefined){
           console.log("FOUND!")
        }
        else{
            console.log("NOT FOUND!")
        }

        //Create output HTML
        result = document.createElement("p")

        if (data[0] !== undefined){
            result.innerHTML = "" + data[0]["name"] + " found!";
         }
         else{
            result.classList.add("error")
            result.innerHTML = "USERNAME NOT FOUND!";
            
         }

        //result.innerHTML = "" + data[0]["name"] + " found!";

        //Delete child elements of results in case of previous result
        document.getElementById("output").innerHTML = ""
        //Display result
        document.getElementById("output").appendChild(result)
    })


}