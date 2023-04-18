import * as functions from 'firebase-functions';
import { Configuration, OpenAIApi } from 'openai';

// funtionsのリージョン指定
export const regionFunctions = functions.region('asia-northeast1');

// openaiのインスタンス作成
const configuration = new Configuration({
  organization: functions.config().openai.organization,
  apiKey: functions.config().openai.app_key,
});

export const openai = new OpenAIApi(configuration);

// constans
export const main_app_name = 'between';
