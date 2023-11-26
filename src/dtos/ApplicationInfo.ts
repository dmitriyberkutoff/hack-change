import {ApplicationStatus} from "@/dtos/ApplicationStatus";

export interface ApplicationInfo {
    id: number;
    status: ApplicationStatus,
    fullName: string;
    changedAt: string;
}