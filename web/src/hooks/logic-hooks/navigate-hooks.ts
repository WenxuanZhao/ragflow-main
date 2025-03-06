import { Routes } from '@/routes';
import { useCallback } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'umi';

export const useNavigatePage = () => {
  const navigate = useNavigate();
=======
import { useNavigate, useParams, useSearchParams } from 'umi';

export enum QueryStringMap {
  KnowledgeId = 'knowledgeId',
}

export const useNavigatePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

  const navigateToDatasetList = useCallback(() => {
    navigate(Routes.Datasets);
  }, [navigate]);

<<<<<<< HEAD
  const navigateToDataset = useCallback(() => {
    navigate(Routes.Dataset);
  }, [navigate]);
=======
  const navigateToDataset = useCallback(
    (id: string) => () => {
      navigate(`${Routes.Dataset}/${id}`);
    },
    [navigate],
  );
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

  const navigateToHome = useCallback(() => {
    navigate(Routes.Home);
  }, [navigate]);

  const navigateToProfile = useCallback(() => {
    navigate(Routes.ProfileSetting);
  }, [navigate]);

  const navigateToChatList = useCallback(() => {
    navigate(Routes.Chats);
  }, [navigate]);

  const navigateToChat = useCallback(() => {
    navigate(Routes.Chat);
  }, [navigate]);

<<<<<<< HEAD
=======
  const navigateToAgentList = useCallback(() => {
    navigate(Routes.Agents);
  }, [navigate]);

  const navigateToAgent = useCallback(
    (id: string) => () => {
      navigate(`${Routes.Agent}/${id}`);
    },
    [navigate],
  );

  const navigateToAgentTemplates = useCallback(() => {
    navigate(Routes.AgentTemplates);
  }, [navigate]);

  const navigateToSearchList = useCallback(() => {
    navigate(Routes.Searches);
  }, [navigate]);

  const navigateToSearch = useCallback(() => {
    navigate(Routes.Search);
  }, [navigate]);

  const navigateToChunkParsedResult = useCallback(
    (id: string, knowledgeId?: string) => () => {
      navigate(
        `${Routes.ParsedResult}/${id}?${QueryStringMap.KnowledgeId}=${knowledgeId}`,
      );
    },
    [navigate],
  );

  const getQueryString = useCallback(
    (queryStringKey?: QueryStringMap) => {
      const allQueryString = {
        [QueryStringMap.KnowledgeId]: searchParams.get(
          QueryStringMap.KnowledgeId,
        ),
      };
      if (queryStringKey) {
        return allQueryString[queryStringKey];
      }
      return allQueryString;
    },
    [searchParams],
  );

  const navigateToChunk = useCallback(
    (route: Routes) => {
      navigate(
        `${route}/${id}?${QueryStringMap.KnowledgeId}=${getQueryString(QueryStringMap.KnowledgeId)}`,
      );
    },
    [getQueryString, id, navigate],
  );

>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  return {
    navigateToDatasetList,
    navigateToDataset,
    navigateToHome,
    navigateToProfile,
    navigateToChatList,
    navigateToChat,
<<<<<<< HEAD
=======
    navigateToChunkParsedResult,
    getQueryString,
    navigateToChunk,
    navigateToAgentList,
    navigateToAgent,
    navigateToAgentTemplates,
    navigateToSearchList,
    navigateToSearch,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  };
};
