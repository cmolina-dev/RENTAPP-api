import { Request, Response } from "express";
type ManagerParams = {
    cognitoId: string;
};
export declare const getManager: (req: Request<ManagerParams>, res: Response) => Promise<void>;
export declare const createManager: (req: Request, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=managerControllers.d.ts.map