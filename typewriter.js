const sentence = "ようこそ、佐知恵子は私です。Welcome, I am Sachieko.";
const typewrite = string => {
  let delay = 500;
  for (const char of string) {
    delay += Math.floor(Math.random() * 150 + 50);
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay + 50);
};
typewrite(sentence);