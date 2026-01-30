"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManager = exports.getManager = void 0;
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
const prisma = new client_1.PrismaClient({ adapter });
const getManager = async (req, res) => {
    try {
        const { cognitoId } = req.params;
        const manager = await prisma.manager.findUnique({
            where: { cognitoId },
        });
        if (manager) {
            res.json(manager);
        }
        else {
            res.status(404).json({ message: "manager not found" });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving manager: ${error.message}` });
    }
};
exports.getManager = getManager;
const createManager = async (req, res) => {
    try {
        const { cognitoId, name, email, phoneNumber } = req.body;
        const manager = await prisma.manager.create({
            data: {
                cognitoId,
                name,
                email,
                phoneNumber,
            },
        });
        res.status(201).json(manager);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error creating manager: ${error.message}` });
    }
};
exports.createManager = createManager;
//# sourceMappingURL=managerControllers.js.map