import { createCipheriv, createDecipheriv } from 'crypto';
import { crypt } from '@config/vars';

export class CryptoHelper {
  protected cryptAlgorithm: string;

  protected cryptKeyBuffer: Buffer;

  protected cryptKey: string;

  protected cryptIv: string;

  constructor() {
    this.cryptAlgorithm = 'aes-256-cbc';
    this.cryptKey = crypt.key;
    this.cryptKeyBuffer = Buffer.from(crypt.key);
    this.cryptIv = crypt.iv;
  }

  encrypt(data: string): string {
    const cipher = createCipheriv(
      this.cryptAlgorithm,
      this.cryptKeyBuffer,
      this.cryptIv,
    );

    const encryptedDataBuffer = cipher.update(data);
    const encryptedData = Buffer.concat([
      encryptedDataBuffer,
      cipher.final(),
    ]).toString('hex');

    return encryptedData;
  }

  decrypt(data: string): string {
    const encryptedText = Buffer.from(data, 'hex');
    const decipher = createDecipheriv(
      'aes-256-cbc',
      Buffer.from(this.cryptKey),
      this.cryptIv,
    );

    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  }
}
