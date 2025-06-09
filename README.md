# Login_Crud_JS_zod

## Desarrollado por:
- Alejandro Rico

## Tecnologías:
- Node.js
- Express
- Mongoose
- Zod
- Nodemon
- Bcryptjs
- Jsonwebtoken
- Cookie-parser
- Morgan

## Manual de usuario:

Creamos la base de datos en MongoDB local con el nombre "mernLogin", creamos las colecciones de user y tasks.

Las estructuras quedan asi:

{
  username: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date
}

y
{
  title: String,
  description: String,
  completed: Boolean,
  userId: ObjectId,
  createdAt: Date,
  updatedAt: Date
}

