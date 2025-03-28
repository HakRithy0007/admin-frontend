

<template>
  <div class="flex flex-col h-[calc(100vh-92px)]">

    <!-- Header content -->
     <div class="flex flex-col md:flex-row md:justify-between py-2 sticky top-[-2px] z-100 gap-3 h-[80px] mb-4">
      <div class="">
        <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" class="w-full h-10 justify-start text-left font-bold text-gray-500">
                  <CalendarIcon class="mr-2 h-4"/>
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar v-model="selectedDate" initial-focus class="rounded-md border"
                   />
              </PopoverContent>
            </Popover>
      </div>
      <div class="flex justify-center items-center gap-2 ">
            <Button class="flex-1 h-10  bg-yellow-500 hover:bg-yellow-400 text-sm">
                <span class="font-noto">TODAY</span>
          </Button>
          <Button class="flex-1 h-10 bg-pink-500 hover:bg-pink-400 text-sm">
            <span class="font-noto">YESTERDAY</span>
          </Button>
          <Button class="flex-1 h-10 bg-red-500 hover:bg-red-400 text-sm">
            <span class="font-noto">WEEK</span>
          </Button>
      </div>
     </div>



    <!-- Table Section -->
    <div class="flex-grow overflow-y-auto mt-4">
      <Table class="w-[1000px] md:w-full border border-gray-300 border-collapse">
        <TableHeader>
          <TableRow>
            <TableHead v-for="header in tableHeaders" :key="header.key" class="text-center border text-nowrap border-gray-300">{{ header.label }}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in invoices" :key="invoice.invoice">
            <TableCell v-for="header in tableHeaders" :key="header.key" class="text-center border text-nowrap border-gray-300">
              {{ invoice[header.key as keyof Invoice] }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- Pagination below the table -->
    <div class="pagination flex items-center justify-center bottom-0 sticky border-t-2 border-gray-300">
      <Pagination :active-page="activePage" :total="totalData" :item-per-page="perPageData"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Pagination from '@/components/Pagination.vue'
import { Button } from "@/components/ui/button";
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { type DateValue, parseDate } from "@internationalized/date";

// Define the types for the invoice data
interface Invoice {
  invoice: string;
  paymentStatus: string;
  paymentMethod: string;
  name: string;
  country: string;
  gender: string;
  totalAmount: string;
}

const selectedDate = ref<DateValue>();
const activePage = ref(1);
const perPageData = ref(10);
const totalData = ref(0);

// Define the invoices array with the Invoice type
const invoices: Invoice[] = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    paymentMethod: 'PayPal',
    name: 'Jane Smith',
    country: 'Canada',
    gender: 'Female',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    name: 'Alice Johnson',
    country: 'UK',
    gender: 'Female',
    totalAmount: '$350.00',
  },
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    paymentMethod: 'PayPal',
    name: 'Jane Smith',
    country: 'Canada',
    gender: 'Female',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    name: 'Alice Johnson',
    country: 'UK',
    gender: 'Female',
    totalAmount: '$350.00',
  },
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    paymentMethod: 'PayPal',
    name: 'Jane Smith',
    country: 'Canada',
    gender: 'Female',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    name: 'Alice Johnson',
    country: 'UK',
    gender: 'Female',
    totalAmount: '$350.00',
  },
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    paymentMethod: 'PayPal',
    name: 'Jane Smith',
    country: 'Canada',
    gender: 'Female',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    name: 'Alice Johnson',
    country: 'UK',
    gender: 'Female',
    totalAmount: '$350.00',
  },
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    paymentMethod: 'PayPal',
    name: 'Jane Smith',
    country: 'Canada',
    gender: 'Female',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    name: 'Alice Johnson',
    country: 'UK',
    gender: 'Female',
    totalAmount: '$350.00',
  },
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    paymentMethod: 'PayPal',
    name: 'Jane Smith',
    country: 'Canada',
    gender: 'Female',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    name: 'Alice Johnson',
    country: 'UK',
    gender: 'Female',
    totalAmount: '$350.00',
  },
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    paymentMethod: 'PayPal',
    name: 'Jane Smith',
    country: 'Canada',
    gender: 'Female',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    name: 'Alice Johnson',
    country: 'UK',
    gender: 'Female',
    totalAmount: '$350.00',
  },

]

// Define the table headers with their labels and corresponding keys
const tableHeaders = [
  { label: 'Invoice', key: 'invoice' },
  { label: 'Status', key: 'paymentStatus' },
  { label: 'Method', key: 'paymentMethod' },
  { label: 'Name', key: 'name' },
  { label: 'Country', key: 'country' },
  { label: 'Gender', key: 'gender' },
  { label: 'Amount', key: 'totalAmount' }
]
</script>