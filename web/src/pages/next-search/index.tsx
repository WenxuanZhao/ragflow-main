<<<<<<< HEAD
export default function Search() {
  return <div>Search</div>;
=======
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
import { EllipsisVertical } from 'lucide-react';

export default function SearchPage() {
  const { navigateToSearchList } = useNavigatePage();

  return (
    <section>
      <PageHeader back={navigateToSearchList} title="Search app 01">
        <div className="flex items-center gap-2">
          <Button variant={'icon'} size={'icon'}>
            <EllipsisVertical />
          </Button>
          <Button variant={'tertiary'} size={'sm'}>
            Publish
          </Button>
        </div>
      </PageHeader>
    </section>
  );
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
}
