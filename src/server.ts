import type { Server } from "http"
import app from "./app.js"


const port = 5000
let server:Server | null = null
async function main(){
    try {

        server = app.listen(port, ()=>{
            console.log("The next blog server is running✅✅✅")
        })
        
    } catch (error) {
        console.log(error)
    }
}
main()