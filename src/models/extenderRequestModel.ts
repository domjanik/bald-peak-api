import * as express from "express";
import userToken from "./userToken";

export default interface extRequest extends express.Request {
    user: userToken;
}
