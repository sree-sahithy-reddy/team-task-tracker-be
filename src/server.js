
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

console.log('Raw PORT:', process.env.PORT);
console.log('Converted PORT:', Number(process.env.PORT));

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export { server };