import React from "react";
import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

test('render pagination', () => {
    render(
        <Pagination
            maxPage={10}
            neighbours={4}
            renderPagination={({ page, currentPage: _, goTo }) => (<button data-testid='page-btn' onClick={() => goTo(page)}>{page}</button>)}
        />
    )
})
