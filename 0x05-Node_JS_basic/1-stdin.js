process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('message', (message) => {
    process.stdout.write(`Your name is: ${message.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('message', (message) => {
    process.stdout.write(`Your name is: ${message.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
