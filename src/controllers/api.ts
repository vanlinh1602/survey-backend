import { Request, Response } from 'express';
import admin from 'firebase-admin';
import { validParams } from 'utils/validator';

export const auth = async (req: Request, res: Response) => {
  try {
    validParams(req.body, ['token']);
    const { token, user } = req.body;

    const checked = await admin.auth().verifyIdToken(token);
    if (checked.uid !== user.uid) {
      throw new Error('Invalid token');
    } else {
      const verify = await Services.users.getUser(user.email);
      if (verify) {
        req.session.user = user;
        await Services.users.updateUser(verify._id, user);
        res.send({ user });
      } else {
        throw new Error('Email chưa có quyền truy cập vui lòng liên hệ admin để cấp quyền');
      }
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const signOut = (req: Request, res: Response) => {
  try {
    req.session.destroy(() => {
      res.send({ message: 'Sign out successfully' });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
