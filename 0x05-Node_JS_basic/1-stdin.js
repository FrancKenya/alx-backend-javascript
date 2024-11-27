process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.resume();

process.stdin.on('data', (message) => {
  process.stdout.write(`Your name is: ${message.toString().trim()}\n`);
  process.exit();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});