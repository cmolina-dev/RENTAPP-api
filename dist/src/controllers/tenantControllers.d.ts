import { Request, Response } from "express";
type TenantParams = {
    cognitoId: string;
};
export declare const getTenant: (req: Request<TenantParams>, res: Response) => Promise<void>;
export declare const createTenant: (req: Request, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=tenantControllers.d.ts.map