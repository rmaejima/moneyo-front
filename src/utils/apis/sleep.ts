import { requestGet, requestPost } from './axios';

type IdealSleepResponse = {
  userId: string;
  bedTime: number;
  wakeUpTime: number;
};

export type IdealSleepRequest = IdealSleepResponse;

export const getIdealSleepTime = async (userId: string) => {
  const { data } = await requestGet<IdealSleepResponse>(
    `/idealsleep/${userId}`,
  );
  return data;
};

export const postIdealSleepTime = async (request: IdealSleepRequest) => {
  const response = await requestPost('/idealsleep', request);
  return response;
};
