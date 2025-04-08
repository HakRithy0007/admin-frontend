<template>
  <div class="flex flex-col h-[calc(100vh-92px)]">

    <!-- Header content -->
    <div class="flex flex-col md:flex-row md:justify-between py-2 sticky top-[-2px] z-100 gap-3 h-[80px] mb-8 md:mb-1">
      <div class="flex justify-between items-center gap-2 md:justify-center">
          <div class="reload-page-button">
          <Button class="w-[40px]" size="icon" @click="reloadPage()">
            <Icon icon="hugeicons:arrow-reload-horizontal" width="1.2em" height="1.2em" />
          </Button>
        </div>
        <div class="select-date flex justify-center items-center w-[150px] md:w-[150px]">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" class="w-full h-10 justify-start text-center font-bold text-gray-500">
                <CalendarIcon class="mr-2 h-4"/>
                {{ selectedDate ? dayjs(selectedDate.toString()).format("YYYY-MM-DD") : "Pick a date" }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="selectedDate" initial-focus class="rounded-md border"  @update:model-value="handleSelectDate"/>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    
      <div class="filter-date-button flex justify-center items-center gap-2">
        <Button @click="handleToday" class="flex-1 h-10 bg-yellow-500 hover:bg-yellow-400 text-sm">
          <span class="font-noto">TODAY</span>
        </Button>
        <Button @click="handleYesterday" class="flex-1 h-10 bg-pink-500 hover:bg-pink-400 text-sm">
          <span class="font-noto">YESTERDAY</span>
        </Button>
        <Button @click="handleWeekly" class="flex-1 h-10 bg-red-500 hover:bg-red-400 text-sm">
          <span class="font-noto">WEEK</span>
        </Button>
      </div>
    </div>

    <!-- Table Section -->
    <div class="table-section flex-grow  relative overflow-hidden">
      <div class="w-full h-full overflow-y-auto">
        <table class="table w-[1300px] md:w-full border border-gray-300 border-collapse">
          <thead class="bg-gray-300 sticky top-[-2px] z-10 ">
            <tr>
              <th v-for="header in tableHeaders" :key="header.key" class="table-header border-2 text-center text-nowrap text-gray-600 border-gray-200 p-2 ">
                <div class="flex justify-center items-center gap-2">
                  <span>{{ header.label }}</span>
                  <span><Icon v-if="header.icon" :icon="header.icon"  /></span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="invoice in invoices" :key="invoice.invoice">
              <td v-for="header in tableHeaders" :key="header.key" class="table-data text-center border text-nowrap border-gray-300 p-2">
                {{ invoice[header.key as keyof Invoice] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination flex items-center justify-center bottom-0 sticky border-t-2 border-gray-300">
      <Pagination :active-page="activePage" :total="totalData" :item-per-page="perPageData" @click-page="handlePagination"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dayjs from "dayjs";
import Pagination from '@/components/Pagination.vue'
import { Button } from "@/components/ui/button";
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Icon } from '@iconify/vue';
import { type Invoice } from '@/type/type'
import router from "@/router/index";
import { type DateValue, parseDate } from "@internationalized/date";

const selectedDate = ref<DateValue>();
const activePage = ref(1);
const perPageData = ref(10);
const totalData = ref(0);

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
]

// Table head
const tableHeaders = [
  { label: 'INVOICE', key: 'invoice', icon: 'icon-park-outline:edit-name' },
  { label: 'STATUS', key: 'paymentStatus', icon: 'mdi:information-outline' },
  { label: 'METHOD', key: 'paymentMethod', icon: 'mdi:credit-card-outline' },
  { label: 'NAME', key: 'name', icon: 'mdi:account-outline' },
  { label: 'COUNTRY', key: 'country', icon: 'mdi:earth' },
  { label: 'GENDER', key: 'gender', icon: 'mdi:gender-male-female' },
  { label: 'AMOUNT ', key: 'totalAmount', icon: 'mdi:currency-usd' }
]

// Reload the page
const reloadPage = () => {
  window.location.reload();
};

// Handle select date
async function handleSelectDate(dateVal: any) {
  let { query } =router.currentRoute.value
  selectedDate.value = parseDate(dayjs(dateVal.toString()).format("YYYY-MM-DD"))
  const formattedDate = dayjs(dateVal.toString()).format("YYYY-MM-DD");

  if (query.date !== formattedDate) {
    query = {
      ...query,
      date: formattedDate,
      page: "1",
    };
    activePage.value = 1;
  } else {
    query = { ...query, date: formattedDate }
  }
  router.push({
    query: query,
    replace: true,
  });
}

// Pagination 
async function handlePagination(page: number) {
  let { query } = router.currentRoute.value
  query = {
    ...query,
    page: page.toString(),
  };
  const previousPage = activePage.value;
  activePage.value = page;
  router.push({
    query: query,
    replace: true,
  });
  const dateVal = query.date?.toString() || "";
  if (activePage.value !== previousPage) {
  // await loadAuditLog(page, dateVal)
}
}

// Handle today
const handleToday = async () => {
  const today = dayjs();
  await handleSelectDate(today);
}

// Handle yesterday
const handleYesterday = async () => {
  const yesterday = dayjs().subtract(1, "day");
  await handleSelectDate(yesterday);
};

// Handle Weekly
const handleWeekly = async () => {
  const startDate = dayjs().subtract(7, "day");
  await handleSelectDate(startDate);
};

// onMounted
onMounted(async () => {
  try{
    let { query } = router.currentRoute.value;
    const { date: queryDate, page } = query;

    activePage.value = page ? Number(page) : 1;
    let dateVal = dayjs().format("YYYY-MM-DD");
    if (queryDate) {
      dateVal = queryDate.toString();
      selectedDate.value = parseDate(dayjs(dateVal).format("YYYY-MM-DD")); 
    }


    handleSelectDate(dateVal)
    // await loadAuditLogs(activePage.value, dateVal);
  } catch (error) {
    console.error("Error in onMounted:", error);
  }
});

</script>
