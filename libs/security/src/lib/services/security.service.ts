import { Injectable } from '@angular/core';

const COOKIE_ACCESS_TOKEN = 'accessToken';
const COOKIE_SUBSCRIPTION_KEY = 'subscriptionKey';

@Injectable({ providedIn: 'root' })
export class SecurityService {
  get accessToken() {
    return JSON.parse(localStorage.getItem(COOKIE_ACCESS_TOKEN) as string);
  }

  get subscriptionKey() {
    return JSON.parse(localStorage.getItem(COOKIE_SUBSCRIPTION_KEY) as string);
  }
}
