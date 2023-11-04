class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class ConnectionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

const validateUser = ({ name, age, email }) => {
    if (!name) throw new Error('el nombre es requerido');
    if (!age) throw new Error('la edad es requerida');
    if (!email) throw new Error('el email es requerido');

    //llamar a la base de datos para guardar el usuario
    throw new ConnectionError('la base de datos no esta disponible')
}

// Ejemplo 1: Objeto con el nombre definido
const user1 = {
    name: 'John',
    age: 30,
    email: null,
  };


try {
    validateUser(user1);
    console.log('El usuario es valido');
} catch (error) {
    if(error instanceof ValidationError) {
        console.error('Error de validacion: ', error.message)
    } else {
        console.error('Error inesperado: ', error.message);
    }
}


// Ejemplo 2: Objeto sin el nombre definido
const user2 = {
    age: 25,
    email: 'jane@example.com',
  };


try {
    validateUser(user2);
    console.log('El usuario es valido');
} catch (error) {
    if(error instanceof ValidationError) {
        console.error('Error de validacion: ', error.message)
    } else {
        console.error('Error inesperado: ', error.message);
    }
}


try {
    validateUser(user1)
} catch (e) {
    if(e.name === 'ConectionError') {
        // reintentar despues de unos segundos
        setTimeout(() => {
            validateUser(user1)
        })
    }
}



















