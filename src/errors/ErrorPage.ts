class ErrorPage {
  private readonly _statusCode: number;
  private readonly _title: string;

  public constructor(code: number, message: string) {
    this._statusCode = code;
    this._title = message;
  }

  get statusCode(): number {
    return this._statusCode;
  }

  get title(): string {
    return this._title;
  }

  static create(code: number, message: string): { statusCode: number; title: string } {
    const error = new ErrorPage(code, message);

    return { statusCode: error.statusCode, title: error.title };
  }
}

export default ErrorPage;
