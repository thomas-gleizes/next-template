import { NextApiRequest, NextApiResponse } from "next";

type route = (req: NextApiRequest, res: NextApiResponse) => void | undefined;

class Router {
  private _get: route;
  private _post: route;
  private _put: route;
  private _patch: route;
  private _delete: route;
  private debug: string;

  public constructor() {
    this.debug = "initialise";
  }

  public handler(req: NextApiRequest, res: NextApiResponse): void {
    const { method } = req;
    try {
      if (method === "GET" && typeof this._get !== undefined) {
        this._get(req, res);

        res.status(200).json({ method: "GET", debug: this?.debug });
      } else if (method === "POST" && typeof this._post !== undefined) {
        this._post(req, res);

        res.status(200).json({ method: "POST", debug: this?.debug });
      } else if (method === "PUT" && typeof this._put !== undefined) {
        this._put(req, res);

        res.status(200).json({ method: "PUT", debug: this?.debug });
      } else if (method === "PATCH" && typeof this._patch !== undefined) {
        this._patch(req, res);

        res.status(200).json({ method: "PATCH", debug: this?.debug });
      } else if (method === "DELETE" && typeof this._delete !== undefined) {
        this._delete(req, res);

        res.status(200).json({ method: "DELETE", debug: this?.debug });
      } else {
        res.status(404).json({ error: "No matching routes" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  set get(route: route) {
    this._get = route;
  }

  set post(route: route) {
    this._post = route;
  }

  set put(route: route) {
    this._put = route;
  }
  set patch(route: route) {
    this._patch = route;
  }

  set delete(route: route) {
    this._delete = route;
  }
}

export default Router;
