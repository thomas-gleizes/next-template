import { User as UserModel } from "@prisma/client";
import { Resources } from "../types";

class UsersResources implements Resources<UserModel, any> {
  public one(resource: UserModel): any {
    const { password, ...rest } = resource;

    return { ...rest };
  }

  public many(resources: Array<UserModel>): Array<any> {
    return resources.map(this.one);
  }
}
