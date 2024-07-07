import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaconfig.js";
import { Prisma } from "@prisma/client";
import { ObjectId } from 'mongodb'; // Import ObjectId from mongodb package

// Function to create a new residency
export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, country, city, facilities, image, userEmail } = req.body.data;

    console.log(req.body.data);
    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                country,
                city,
                facilities,
                image,
                owner: { connect: { email: userEmail } },
            },
        });
        res.send({
            message: "Residency created successfully",
            residency,
        });
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                throw new Error("A residency with this address already exists");
            }
        }
        throw new Error(err.message);
    }
});

// Function to get all the documents/residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    res.send(residencies);
});

// Function to get a specific document/residency
export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Validate and convert id to ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid residency ID" });
    }

    try {
        const residency = await prisma.residency.findUnique({
            where: { id: new ObjectId(id) },
        });

        if (!residency) {
            return res.status(404).send({ message: "Residency not found" });
        }

        res.send(residency);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
