import { ISession } from '../domain/interfaces/auth.interface';

export class SessionService {
  getSessionStorage(session: ISession, key: string) {
    return session[key];
  }

  setSessionStorage(session: ISession, key: string, data: any) {
    session[key] = data;
  }
}
