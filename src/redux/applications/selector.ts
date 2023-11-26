import { SmallProfileResponse } from '@/dtos/SmallProfileResponse';
import {ApplicationInfo} from "@/dtos/ApplicationInfo";

interface ApplicationState {
  all: ApplicationInfo[];
}

export const selectAllApplicationsModule = (state: ApplicationState) => state.all;
