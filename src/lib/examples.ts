export const examples = {
  A: {
    json: {
      name: "Alice",
      age: 30,
      email: "alice@example.com"
    },
    toon: `name: Alice
age: 30
email: alice@example.com`
  },
  B: {
    json: {
      users: [
        { id: 1, name: "Bob", active: true },
        { id: 2, name: "Carol", active: false },
        { id: 3, name: "Dave", active: true }
      ]
    },
    toon: `users[3]{id,name,active}:
  1,Bob,true
  2,Carol,false
  3,Dave,true`
  },
  C: {
    json: {
      products: [
        { sku: "A001", price: 29.99, stock: 100 },
        { sku: "B202", price: 49.99, stock: 50 },
        { sku: "C303", price: 19.99, stock: 200 }
      ],
      store: "Main Warehouse"
    },
    toon: `products[3]{sku,price,stock}:
  A001,29.99,100
  B202,49.99,50
  C303,19.99,200
store: Main Warehouse`
  },
  D: {
    json: {
      config: {
        database: {
          host: "localhost",
          port: 5432,
          credentials: {
            user: "admin",
            password: "secret123"
          }
        },
        features: ["auth", "api", "cache"]
      }
    },
    toon: `config:
  database:
    host: localhost
    port: 5432
    credentials:
      user: admin
      password: secret123
  features:
    - auth
    - api
    - cache`
  }
};
