import { NextApiRequest, NextApiResponse } from "next";

class Router {
  private getRoute: (req: NextApiRequest, res: NextApiResponse) => void | undefined;
  private debug: string;

  public constructor() {
    this.getRoute = undefined;
    this.debug = "salut";
  }

  public get(func: (req: NextApiRequest, res: NextApiResponse) => void): void {
    this.getRoute = func;
  }

  public handler(req: NextApiRequest, res: NextApiResponse): void {
    if (req.method === "GET") {
      console.log("This", this);

      res.status(200).json({ method: "GET", debug: this?.debug });

      return;
    } else {
      res.status(404).json({ message: "method doesn't exist" });
    }
  }
}

export default Router;
