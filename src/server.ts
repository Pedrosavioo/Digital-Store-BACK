import express from "express";
import "dotenv";
import app from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
