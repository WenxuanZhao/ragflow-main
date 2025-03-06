import { ConfirmDeleteDialog } from '@/components/confirm-delete-dialog';
import ListFilterBar from '@/components/list-filter-bar';
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
import { ChevronRight, Plus, Trash2 } from 'lucide-react';
import { DatasetCreatingDialog } from './dataset-creating-dialog';
import { useSaveKnowledge } from './hooks';

const datasets = [
  {
    id: 1,
    title: 'Legal knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 2,
    title: 'HR knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 3,
    title: 'IT knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 4,
    title: 'Legal knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 5,
    title: 'Legal knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 6,
    title: 'Legal knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 7,
    title: 'Legal knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 8,
    title: 'Legal knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: 9,
    title: 'Legal knowledge base',
    files: '1,242 files',
    size: '152 MB',
    created: '12.02.2024',
    image: 'https://github.com/shadcn.png',
  },
];

=======
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useInfiniteFetchKnowledgeList } from '@/hooks/knowledge-hooks';
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
import { IKnowledge } from '@/interfaces/database/knowledge';
import { formatDate } from '@/utils/date';
import { ChevronRight, Plus, Trash2 } from 'lucide-react';
import { useMemo } from 'react';
import { DatasetCreatingDialog } from './dataset-creating-dialog';
import { useSaveKnowledge } from './hooks';

>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
export default function Datasets() {
  const {
    visible,
    hideModal,
    showModal,
    onCreateOk,
    loading: creatingLoading,
  } = useSaveKnowledge();
  const { navigateToDataset } = useNavigatePage();

<<<<<<< HEAD
=======
  const {
    fetchNextPage,
    data,
    hasNextPage,
    searchString,
    handleInputChange,
    loading,
  } = useInfiniteFetchKnowledgeList();

  const nextList: IKnowledge[] = useMemo(() => {
    const list =
      data?.pages?.flatMap((x) => (Array.isArray(x.kbs) ? x.kbs : [])) ?? [];
    return list;
  }, [data?.pages]);

  const total = useMemo(() => {
    return data?.pages.at(-1).total ?? 0;
  }, [data?.pages]);

>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  return (
    <section className="p-8 text-foreground">
      <ListFilterBar title="Datasets" showDialog={showModal}>
        <Plus className="mr-2 h-4 w-4" />
        Create dataset
      </ListFilterBar>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
<<<<<<< HEAD
        {datasets.map((dataset) => (
=======
        {nextList.map((dataset) => (
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
          <Card
            key={dataset.id}
            className="bg-colors-background-inverse-weak flex-1"
          >
            <CardContent className="p-4">
              <div className="flex justify-between mb-4">
<<<<<<< HEAD
                <div
                  className="w-[70px] h-[70px] rounded-xl bg-cover"
                  style={{ backgroundImage: `url(${dataset.image})` }}
                />
=======
                <Avatar className="w-[70px] h-[70px] rounded-lg">
                  <AvatarImage src={dataset.avatar} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
                <ConfirmDeleteDialog>
                  <Button variant="ghost" size="icon">
                    <Trash2 />
                  </Button>
                </ConfirmDeleteDialog>
              </div>
              <div className="flex justify-between items-end">
                <div>
<<<<<<< HEAD
                  <h3 className="text-lg font-semibold mb-2">
                    {dataset.title}
                  </h3>
                  <p className="text-sm opacity-80">
                    {dataset.files} | {dataset.size}
                  </p>
                  <p className="text-sm opacity-80">
                    Created {dataset.created}
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={navigateToDataset}
=======
                  <h3 className="text-lg font-semibold mb-2">{dataset.name}</h3>
                  <p className="text-sm opacity-80">{dataset.doc_num} files</p>
                  <p className="text-sm opacity-80">
                    Created {formatDate(dataset.update_time)}
                  </p>
                </div>
                <Button
                  variant="icon"
                  size="icon"
                  onClick={navigateToDataset(dataset.id)}
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {visible && (
        <DatasetCreatingDialog
          hideModal={hideModal}
          onOk={onCreateOk}
          loading={creatingLoading}
        ></DatasetCreatingDialog>
      )}
    </section>
  );
}
