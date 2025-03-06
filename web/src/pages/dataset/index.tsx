<<<<<<< HEAD
=======
import { PageHeader } from '@/components/page-header';
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import { Outlet } from 'umi';
import { SideBar } from './sidebar';

export default function DatasetWrapper() {
<<<<<<< HEAD
  return (
    <div className="flex flex-1">
      <SideBar></SideBar>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
=======
  const { navigateToDatasetList } = useNavigatePage();
  return (
    <section>
      <PageHeader
        title="Dataset details"
        back={navigateToDatasetList}
      ></PageHeader>
      <div className="flex flex-1">
        <SideBar></SideBar>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </section>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  );
}
