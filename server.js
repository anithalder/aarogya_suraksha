// server.js
import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const db = router.db; // lowdb instance

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Custom CORS Middleware to handle credentials
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow your frontend origin
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});


// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// Custom route for user login
server.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const user = db.get('users').find({ email: email, password: password }).value();

    if (user) {
        // In a real app, you'd create a session or JWT here.
        // For this simulation, we'll just confirm success.
        res.status(200).json({
            success: true,
            message: `Welcome back, ${user.full_name}!`,
            user: { id: user.id, name: user.full_name, email: user.email, role: user.role }
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

// Custom route for user registration
server.post('/api/auth/register', (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = db.get('users').find({ email: email }).value();

    if (existingUser) {
        return res.status(400).json({ success: false, message: 'User with this email already exists' });
    }

    // This is a simplified registration
    const newUser = {
        id: db.get('users').value().length + 101, // simple ID generation
        full_name: name,
        email: email,
        password: password, // In a real app, ALWAYS hash the password
        role: 'PATIENT'
    };

    db.get('users').push(newUser).write();

    res.status(201).json({
        success: true,
        message: 'Registration successful!',
        user: { id: newUser.id, name: newUser.full_name, email: newUser.email, role: newUser.role }
    });
});


// Use default router for all other routes
server.use(router);

server.listen(4000, () => {
    console.log('JSON Server with custom routes is running on port 4000');
});
