'use client';

import {
<<<<<<< HEAD
  ColumnDef,
=======
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
<<<<<<< HEAD
import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
=======
import * as React from 'react';

import { ChunkMethodDialog } from '@/components/chunk-method-dialog';
import { Button } from '@/components/ui/button';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
<<<<<<< HEAD
import { RunningStatus } from '@/constants/knowledge';
import { IDocumentInfo } from '@/interfaces/database/document';
import { useTranslation } from 'react-i18next';

const data: IDocumentInfo[] = [
  {
    chunk_num: 1,
    create_date: 'Thu, 28 Nov 2024 17:10:22 GMT',
    create_time: 1732785022792,
    created_by: 'b0975cb4bc3111ee9b830aef05f5e94f',
    id: '990cb30ead6811efb9b9fa163e197198',
    kb_id: '25a8cfbe9cd411efbc12fa163e197198',
    location: 'mian.jpg',
    name: 'mian.jpg',
    parser_config: {
      pages: [[1, 1000000]],
    },
    parser_id: 'picture',
    process_begin_at: 'Thu, 28 Nov 2024 17:10:25 GMT',
    process_duation: 8.46185,
    progress: 1,
    progress_msg:
      '\nTask has been received.\nPage(1~100000001): Finish OCR: (用小麦粉\n金\nONGXI ...)\nPage(1~100000001): OCR results is too long to use CV LLM.\nPage(1~100000001): Finished slicing files (1 chunks in 0.34s). Start to embedding the content.\nPage(1~100000001): Finished embedding (in 0.35s)! Start to build index!\nPage(1~100000001): Indexing elapsed in 0.02s.\nPage(1~100000001): Done!',
    run: RunningStatus.RUNNING,
    size: 19692,
    source_type: 'local',
    status: '1',
    thumbnail:
      '/v1/document/image/25a8cfbe9cd411efbc12fa163e197198-thumbnail_990cb30ead6811efb9b9fa163e197198.png',
    token_num: 115,
    type: 'visual',
    update_date: 'Thu, 28 Nov 2024 17:10:33 GMT',
    update_time: 1732785033462,
  },
];

export function DatasetTable() {
=======
import { useFetchNextDocumentList } from '@/hooks/document-hooks';
import { useSetSelectedRecord } from '@/hooks/logic-hooks';
import { IDocumentInfo } from '@/interfaces/database/document';
import { getExtension } from '@/utils/document-util';
import { useMemo } from 'react';
import { useChangeDocumentParser } from './hooks';
import { useDatasetTableColumns } from './use-dataset-table-columns';

export function DatasetTable() {
  const {
    // searchString,
    documents,
    pagination,
    // handleInputChange,
    setPagination,
  } = useFetchNextDocumentList();
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
<<<<<<< HEAD
  const { t } = useTranslation('translation', {
    keyPrefix: 'knowledgeDetails',
  });

  const columns: ColumnDef<IDocumentInfo>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {t('name')}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'create_time',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {t('uploadDate')}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue('create_time')}</div>
      ),
    },
    {
      accessorKey: 'parser_id',
      header: t('chunkMethod'),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('parser_id')}</div>
      ),
    },
    {
      accessorKey: 'run',
      header: t('parsingStatus'),
      cell: ({ row }) => (
        <Button variant="destructive" size={'sm'}>
          {row.getValue('run')}
        </Button>
      ),
    },
    {
      id: 'actions',
      header: t('action'),
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <section className="flex gap-4 items-center">
            <Switch id="airplane-mode" />
            <Button variant="secondary" size={'icon'}>
              <Pencil />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size={'icon'}>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
=======

  const { currentRecord, setRecord } = useSetSelectedRecord<IDocumentInfo>();

  const {
    changeParserLoading,
    onChangeParserOk,
    changeParserVisible,
    hideChangeParserModal,
    showChangeParserModal,
  } = useChangeDocumentParser(currentRecord.id);

  const columns = useDatasetTableColumns({
    showChangeParserModal,
    setCurrentRecord: setRecord,
  });

  const currentPagination = useMemo(() => {
    return {
      pageIndex: (pagination.current || 1) - 1,
      pageSize: pagination.pageSize || 10,
    };
  }, [pagination]);

  const table = useReactTable({
    data: documents,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
<<<<<<< HEAD
=======
    onPaginationChange: (updaterOrValue: any) => {
      if (typeof updaterOrValue === 'function') {
        const nextPagination = updaterOrValue(currentPagination);
        setPagination({
          page: nextPagination.pageIndex + 1,
          pageSize: nextPagination.pageSize,
        });
      } else {
        setPagination({
          page: updaterOrValue.pageIndex,
          pageSize: updaterOrValue.pageSize,
        });
      }
    },
    manualPagination: true, //we're doing manual "server-side" pagination
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
<<<<<<< HEAD
    },
=======
      pagination: currentPagination,
    },
    rowCount: pagination.total ?? 0,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
<<<<<<< HEAD
                    <TableCell key={cell.id}>
=======
                    <TableCell
                      key={cell.id}
                      className={cell.column.columnDef.meta?.cellClassName}
                    >
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
<<<<<<< HEAD
          {table.getFilteredRowModel().rows.length} row(s) selected.
=======
          {pagination?.total} row(s) selected.
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
<<<<<<< HEAD
=======
      {changeParserVisible && (
        <ChunkMethodDialog
          documentId={currentRecord.id}
          parserId={currentRecord.parser_id}
          parserConfig={currentRecord.parser_config}
          documentExtension={getExtension(currentRecord.name)}
          onOk={onChangeParserOk}
          visible={changeParserVisible}
          hideModal={hideChangeParserModal}
          loading={changeParserLoading}
        ></ChunkMethodDialog>
      )}
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    </div>
  );
}
