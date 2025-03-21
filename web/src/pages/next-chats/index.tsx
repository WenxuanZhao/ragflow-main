import ListFilterBar from '@/components/list-filter-bar';
<<<<<<< HEAD
import { useFetchNextDialogList } from '@/hooks/chat-hooks';
=======
import { useFetchChatAppList } from '@/hooks/chat-hooks';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import { Plus } from 'lucide-react';
import { ChatCard } from './chat-card';

export default function ChatList() {
<<<<<<< HEAD
  const { data: chatList } = useFetchNextDialogList();
=======
  const { data: chatList } = useFetchChatAppList();
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

  return (
    <section className="p-8">
      <ListFilterBar title="Chat apps">
        <Plus className="mr-2 h-4 w-4" />
        Create app
      </ListFilterBar>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
        {chatList.map((x) => {
          return <ChatCard key={x.id} data={x}></ChatCard>;
        })}
      </div>
    </section>
  );
}
