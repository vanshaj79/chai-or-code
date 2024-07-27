import express from 'express'

const app = express();

app.get('/api/products',(req,res)=>{
    const products = [
        {
            id:1,
            name:'table',
            price:200,
        },
        {
            id:2,
            name:'wooden',
            price:200,
        },
        {
            id:3,
            name:'hello',
            price:200,
        },
    ]

    if(req.query.search){
        const filteredProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filteredProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products)
    },3000)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})