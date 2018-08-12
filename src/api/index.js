import Shine, {SCOPES} from "./shine";

export default class ShineClient {

    static make(){
        return new Shine('b6fbbf9d-785c-40b1-af27-abbe24aa04e5', '4b87583caa48bd994fa93a3477c7d9151dd9461e8058a9fdf9', 'http://localhost:3000/validate', ['openid', 'profile', 'email', 'phone', 'user:profile:read', 'user:companies:read'])
    }

}