'use strict';

export default class User {

    _userProfileId;
    _uid;
    _city;
    _country;
    _email;
    _firstName;
    _lastName;
    _fullNameLatinised;
    _gender;
    _phone;
    _street;
    _zip;
    _birthCity;
    _birthCountry;
    _nationality;
    _birthdateAt;
    _birthdate;

    get userProfileId() {
        return this._userProfileId;
    }

    get uid() {
        return this._uid;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullNameLatinised() {
        return this._fullNameLatinised;
    }

    get gender() {
        return this._gender;
    }

    get phone() {
        return this._phone;
    }

    get street() {
        return this._street;
    }

    get zip() {
        return this._zip;
    }

    get birthCity() {
        return this._birthCity;
    }

    get birthCountry() {
        return this._birthCountry;
    }

    get nationality() {
        return this._nationality;
    }

    get birthdateAt() {
        return this._birthdateAt;
    }

    get birthdate() {
        return this._birthdate;
    }
}

