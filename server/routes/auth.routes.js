import express from "express"
import {signup} from "../controllers/auth.controllers.js"

router.post('/signup', signup)