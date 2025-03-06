export enum MessageType {
  Assistant = 'assistant',
  User = 'user',
}

<<<<<<< HEAD
export const variableEnabledFieldMap = {
  temperatureEnabled: 'temperature',
  topPEnabled: 'top_p',
  presencePenaltyEnabled: 'presence_penalty',
  frequencyPenaltyEnabled: 'frequency_penalty',
  maxTokensEnabled: 'max_tokens',
=======
export enum ChatVariableEnabledField {
  TemperatureEnabled = 'temperatureEnabled',
  TopPEnabled = 'topPEnabled',
  PresencePenaltyEnabled = 'presencePenaltyEnabled',
  FrequencyPenaltyEnabled = 'frequencyPenaltyEnabled',
  MaxTokensEnabled = 'maxTokensEnabled',
}

export const variableEnabledFieldMap = {
  [ChatVariableEnabledField.TemperatureEnabled]: 'temperature',
  [ChatVariableEnabledField.TopPEnabled]: 'top_p',
  [ChatVariableEnabledField.PresencePenaltyEnabled]: 'presence_penalty',
  [ChatVariableEnabledField.FrequencyPenaltyEnabled]: 'frequency_penalty',
  [ChatVariableEnabledField.MaxTokensEnabled]: 'max_tokens',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
};

export enum SharedFrom {
  Agent = 'agent',
  Chat = 'chat',
}

export enum ChatSearchParams {
  DialogId = 'dialogId',
  ConversationId = 'conversationId',
  isNew = 'isNew',
}

export const EmptyConversationId = 'empty';
