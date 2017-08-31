import { BaseInfo } from "./baseInfo";

export class MissionInfo extends BaseInfo {
  planName: string;
  completed: number;
  total: number;
  deadline: number;
  exp: number;
  price: number;
  invitationId: number;
  employees: number;
  planId: number;
  accepted: boolean;
  type: number;
  denominator: number;
  molecule: number;
}
