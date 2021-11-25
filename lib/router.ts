import { NextApiRequest, NextApiResponse } from "next";

declare type route = (req: NextApiRequest, res: NextApiResponse) => void | undefined;

class Router {
  private debug: string;

  public constructor() {
    this.debug = "initialise";
  }

  private _get: route;

  set get(route: route) {
    this._get = route;
  }

  private _post: route;

  set post(route: route) {
    this._post = route;
  }

  private _put: route;

  set put(route: route) {
    this._put = route;
  }

  private _patch: route;

  set patch(route: route) {
    this._patch = route;
  }

  private _delete: route;

  set delete(route: route) {
    this._delete = route;
  }

  public handler: route = (req, res) => {
    const { method } = req;
    try {
      if (method === "GET" && typeof this._get !== "undefined") {
        this._get(req, res);
      } else if (method === "POST" && typeof this._post !== "undefined") {
        this._post(req, res);
      } else if (method === "PUT" && typeof this._put !== "undefined") {
        this._put(req, res);
      } else if (method === "PATCH" && typeof this._patch !== "undefined") {
        this._patch(req, res);
      } else if (method === "DELETE" && typeof this._delete !== "undefined") {
        this._delete(req, res);
      } else {
        res.status(404).json({ error: "No matching routes" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
}

export default new Router();
