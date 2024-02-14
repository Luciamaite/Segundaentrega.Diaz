class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const id = this.generateUniqueId();
      const product = { id, title, description, price, thumbnail, code, stock };
      this.products.push(product);
      return product;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    }
  
    updateProduct(id, updatedFields) {
      const index = this.products.findIndex((p) => p.id === id);
      if (index === -1) {
        throw new Error("Product not found");
      }
  
      this.products[index] = { ...this.products[index], ...updatedFields };
      return this.products[index];
    }
  
    deleteProduct(id) {
      const index = this.products.findIndex((p) => p.id === id);
      if (index === -1) {
        throw new Error("Product not found");
      }
  
      const deletedProduct = this.products.splice(index, 1);
      return deletedProduct[0];
    }
  
    generateUniqueId() {
      // Esta es una función simple para generar IDs únicos, puedes ajustarla según tus necesidades
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  
  // Método 1: getProducts()
  console.log(productManager.getProducts()); // []
  
  // Método 2: addProduct()
  const newProduct = productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
  console.log(productManager.getProducts()); // [ { id: '...', title: '...', ... } ]
  
  // Método 3: getProductById()
  console.log(productManager.getProductById(newProduct.id));
  
  // Método 4: updateProduct()
  const updatedProduct = productManager.updateProduct(newProduct.id, { price: 250 });
  console.log(updatedProduct);
  
  // Método 5: deleteProduct()
  const deletedProduct = productManager.deleteProduct(newProduct.id);
  console.log(deletedProduct);
  console.log(productManager.getProducts()); // []
  
