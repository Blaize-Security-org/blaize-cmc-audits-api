import { createHash } from 'crypto';

export const hashCode = (str) =>
  createHash('sha256').update(str).digest('base64url');
