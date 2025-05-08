tokenValidate()
function getUsers(){
    document.getElementById("cardHeader").innerHTML= "<h4>Listado de usuario</h4>"
    fetch("https://reqres.in/api/users?page=1",{
        method: "GET", 
        headers:{
            "Content-type": "application/json",
            'x-api-key': 'reqres-free-v1'
        },
    })
    .then((result) =>{
        return result.json().then(
            data => {
                return {
                    status: result.status, body:data
                }
            }
        )
    })
    .then((response)=>{
        if(response.status === 200){
            let listUsers=`
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Avatar</th>
                            </tr>
                        </thead>
                        <tbody>
            `
            response.body.data.forEach(user => {
                listUsers= listUsers.concat(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td><img src="${user.avatar}" class="img-thumbnail" alt="Avatar de usuario"></td>
                    </tr>
                    `)
                
            });
            listUsers= listUsers.concat(`
                    </body>
                </table>
                `)
                document.getElementById("info").innerHTML= listUsers
        }
        else{
            document.getElementById("info").innerHTML="<h3>No se encontraron usuarios</h3>"
        }
    })
}

function getProducts(){
    document.getElementById("cardHeader").innerHTML= "<h4>Lista de producto</h4>"
    fetch("https://reqres.in/api/unknown",{
        method: "GET", 
        headers:{
            "Content-type": "application/json",
            'x-api-key': 'reqres-free-v1'
        },
    })
    .then((result) =>{
        return result.json().then(
            data => {
                return {
                    status: result.status, body:data
                }
            }
        )
    })
    .then((response)=>{
        if(response.status === 200){
            let listProducts=`
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">year</th>
                                <th scope="col">color</th>
                                <th scope="col">pantone_value</th>
                            </tr>
                        </thead>
                        <tbody>
            `
            response.body.data.forEach(user => {
                listProducts= listProducts.concat(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.year}</td>
                        <td style="background-color:${user.color}"></td>
                        <td>${user.pantone_value}</td>
                    </tr>
                    `)
                
            });
            listProducts= listProducts.concat(`
                    </body>
                </table>
                `)
                document.getElementById("info").innerHTML= listProducts
        }
        else{
            document.getElementById("info").innerHTML="<h3>No se encontraron usuarios</h3>"
        }
    })
}

function logout(){
    localStorage.removeItem("token")
    location.href="../index.html"
}

function tokenValidate(){
    const TOKEN = localStorage.getItem("token")
    if(TOKEN !== "QpwL5tke4Pnpja7X4"){
        location.href="../index.html"
    }
    console.log("Autenticado", TOKEN)
}

