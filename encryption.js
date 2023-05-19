const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'KlepseLigotero5$'; // Your secret encryption key
const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector)

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage
const originalKey =;

// Encrypt the key
const encryptedKey = encrypt(originalKey);
console.log('Encrypted Key:', encryptedKey);

// Decrypt the key
const decryptedKey = decrypt(encryptedKey);
console.log('Decrypted Key:', decryptedKey);
