import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoodleServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoodleServiceProvider Provider');
  }

  searchUsername(username: string) {
    return this.http.get('https://aulas.iztacala.unam.mx/webservice/rest/server.php?wstoken=92550f65639328cc3836c63e8de96b21&wsfunction=core_user_get_users&criteria%5B0%5D%5Bkey%5D=username&moodlewsrestformat=json&criteria%5B0%5D%5Bvalue%5D=' + username);
  }

  resetPassword(id: string, password: string) {
    return this.http.get('https://aulas.iztacala.unam.mx/webservice/rest/server.php?wstoken=92550f65639328cc3836c63e8de96b21&wsfunction=core_user_update_users&moodlewsrestformat=json&users[0][password]=' + password + '&users[0][id]=' + id);
  }
}
