const ProductController = require("./../controllers/product.controller")

module.exports = (app) =>{
    app.get("/api/test", ProductController.testApi)
    app.get("/api/products", ProductController.allProd)
    app.get("/api/product/:id", ProductController.oneProd)
    app.post("/api/product", ProductController.addProd)
    app.put("/api/product/:id", ProductController.updateProd)
    app.delete("/api/product/:id", ProductController.deleteProd)
    
}