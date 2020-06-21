export default {
    
    URL: process.env.NODE_ENV == 'development' ? 'http://localhost:8000' : '',
    IMAGE: process.env.NODE_ENV == 'development' ? '' : '/storage/',
    

}