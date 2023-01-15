import { Mongoose } from "mongoose";

declare global {
  namespace Mongoose {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface DocContents {
      _doc: () => any;
    }
  }
}
export {};
