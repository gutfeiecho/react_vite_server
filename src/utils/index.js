// import crypto module
import crypto from 'node:crypto';

// determine which algorithm used
const algorithm = 'aes-256-cbc';

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

// secret key generate 32 bytes of random data
const securityKey = crypto.randomBytes(32);

/**
 * 加密数据
 * @param {string} message
 * @returns
 */
const encryptPassword = (message) => {
  // the cipher function
  const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);

  // encrypt the message
  let encryptedData = cipher.update(message, 'utf8', 'hex');

  encryptedData += cipher.final('hex');

  return encryptedData;
};

/**
 * 解密数据
 * @param {string} encryptedData
 * @returns
 */
const decryptPassword = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');

  decryptedData += decipher.final('utf8');

  return decryptedData;
};

export { encryptPassword, decryptPassword };
