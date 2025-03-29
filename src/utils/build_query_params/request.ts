export interface Pagination {
    page: number;
    per_page: number;
}

export interface Sort {
    property: string;
    direction: 'asc' | 'desc';
}

export interface Filter {
    property: string;
    value: any;
}

export const buildQueryParams = ( params: {
    pagination_options: Pagination
    sorts?: Sort[];
    filters?: Filter[];
}): string => {
    const queryParams = new URLSearchParams();

      // Add paging options
      queryParams.append('paging_options[page]', params.pagination_options.page.toString());
      queryParams.append('paging_options[per_page]', params.pagination_options.per_page.toString());

       // Add sorts
    params.sorts?.forEach((sort, index) => {
        queryParams.append(`sorts[${index}][property]`, sort.property);
        queryParams.append(`sorts[${index}][direction]`, sort.direction);
    });

    return queryParams.toString();
};