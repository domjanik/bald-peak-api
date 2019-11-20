import * as express from "express";

export default interface extRequest extends express.Request {
    user: userData;
}
