import 'reflect-metadata';
import app from './app'
import { config } from './config'; 
const PORT = config.PORT



app.listen(PORT,()=>{
    console.log(`server started successfully`);
})
.on('error', (e: string)=>{
    throw new Error(e);
});
