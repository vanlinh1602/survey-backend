import admin from 'firebase-admin';
import path from 'path';

admin.initializeApp({
  credential: admin.credential.cert(
    path.join(__dirname, '..', 'configs', 'serviceAccountKey.json')
  ),
});
