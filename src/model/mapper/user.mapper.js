import {User} from "../entities/user";

export class UserMapper {

    fromJson(json) {
        return new User(
            json.userId,
            json.name,
            json.email
        );
    }
}