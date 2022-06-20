export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._profileDefaultName = document.querySelector(this._nameSelector);
    this._profileDefaultJob = document.querySelector(this._jobSelector);
  }

  getUserInfo() {
    return { name: this._profileDefaultName.textContent, job: this._profileDefaultJob.textContent };
  }

  setUserInfo(data) {
    this._profileDefaultName.textContent = data.name;
    this._profileDefaultJob.textContent = data.about;
  }
}
