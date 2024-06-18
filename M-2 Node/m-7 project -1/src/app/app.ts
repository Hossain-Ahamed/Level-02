
import express, { NextFunction, Request, Response } from 'express';

const app = express()
const port = 3000

app.use(express.json())
app.use(express.text())


//middle ware
const logger = (req:Request,res:Response, next: NextFunction)=>{
    console.log(req.url,req.method,req.cookies,req.ip);
    next()
}
app.get('/',logger, (req : Request, res: Response,next:NextFunction) => {
  try{
  res.send('ksad')
  }catch(error){
    next(error)
  }
})

app.post('/',logger,(req:Request,res: Response)=>{
    console.log(req.body);
    res.send('got data')
})



//global error handleer
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    console.log(error);
    res.status(500).send('khaise re')
})


// not found url 
app.all("*", (req:Request,res:Response)=>{
    res.status(404).send("not found")
})
export default app
