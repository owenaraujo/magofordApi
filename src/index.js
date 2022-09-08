import app from './config/config'
const port = app.get('port')
app.listen(port,()=>{
    console.log('server in port '+port);
})
import './config/database'