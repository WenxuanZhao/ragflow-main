import {
  ApiIcon,
  LogOutIcon,
  ModelProviderIcon,
  PasswordIcon,
  ProfileIcon,
  TeamIcon,
} from '@/assets/icon/Icon';
<<<<<<< HEAD
=======
import { LLMFactory } from '@/constants/llm';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import { UserSettingRouteKey } from '@/constants/setting';
import { MonitorOutlined } from '@ant-design/icons';

export const UserSettingIconMap = {
  [UserSettingRouteKey.Profile]: <ProfileIcon />,
  [UserSettingRouteKey.Password]: <PasswordIcon />,
  [UserSettingRouteKey.Model]: <ModelProviderIcon />,
  [UserSettingRouteKey.System]: <MonitorOutlined style={{ fontSize: 24 }} />,
  [UserSettingRouteKey.Team]: <TeamIcon />,
  [UserSettingRouteKey.Logout]: <LogOutIcon />,
  [UserSettingRouteKey.Api]: <ApiIcon />,
};

export * from '@/constants/setting';

export const LocalLlmFactories = [
<<<<<<< HEAD
  'Ollama',
  'Xinference',
  'LocalAI',
  'LM-Studio',
  'OpenAI-API-Compatible',
  'TogetherAI',
  'Replicate',
  'OpenRouter',
  'HuggingFace',
  'GPUStack',
=======
  LLMFactory.Ollama,
  LLMFactory.Xinference,
  LLMFactory.LocalAI,
  LLMFactory.LMStudio,
  LLMFactory.OpenAiAPICompatible,
  LLMFactory.TogetherAI,
  LLMFactory.Replicate,
  LLMFactory.OpenRouter,
  LLMFactory.HuggingFace,
  LLMFactory.GPUStack,
  LLMFactory.ModelScope,
  LLMFactory.VLLM,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
];

export enum TenantRole {
  Owner = 'owner',
  Invite = 'invite',
  Normal = 'normal',
}
