import { Document } from "mongoose";
import User from "../types/user.type";
/**
 * These are special interfaces that combines Document type of mongoose and user defined type
 * This helps to define types on the responses of mongoose function.
 */


export default interface IUserModel extends Document , User {   
}