import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

import { Profile } from '../models/profile.interface'
import { LoginResponse } from '../models/login-response.interface'

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {

  }

  getAuthObservable() {
    return this.auth;
  }

  getAuthenticatedUser() {
    return this.auth.authState;
  }


  getCurrentUser() {
    return this.auth.auth.currentUser;
  }

  get authenticated(): boolean {
    return this.auth.auth.currentUser !== null;
  }

  async createUserWithEmailAndPassword(profile: Profile) {
    try {
      return <LoginResponse>{
        result: await this.auth.auth.createUserWithEmailAndPassword(profile.email, profile.password)
      }
    }
    catch(e) {
      return <LoginResponse>{
        error: e
      }
    }
  }

  async signInWithEmailAndPassword(profile: Profile) {
    try {
      return <LoginResponse>{
        result: await this.auth.auth.signInWithEmailAndPassword(profile.email, profile.password)
      };
    }
    catch (e) {
      return <LoginResponse>{
        error: e
      };
    }

  }

  logout() {
    return this.auth.auth.signOut();
  }

}
