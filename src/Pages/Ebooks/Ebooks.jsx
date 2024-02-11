import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getBooks } from "../../API/Api";
import EbookCard from "../../Components/EbookCard/EbookCard";
import { Link } from "react-router-dom";

export default function Ebooks() {
  const [Books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [meta, setmeta] = useState();

  const getData = async (currentPage) => {
    const { data, meta, links, extra_data } = await getBooks(currentPage);
    setBooks(data);
    setPagination(meta.total_count);
    setmeta(meta);
  };

  const HandleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);
  return (
    <Grid sx={{ width: "100%", height: "100%" }}>
      {meta?.total_count ? (
        <>
          <Grid container sx={{ display: "flex", justifyContent: "start" }}>
            {Books.map((book, index) => {
              return (
                <>
                  <EbookCard bookDetails={book} key={index} xs={3} />
                </>
              );
            })}
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={pagination}
              shape="rounded"
              sx={{ background: "white" }}
              onChange={HandleChange}
              page={currentPage}
            />
          </Grid>
        </>
      ) : (
        <>
          <Box>NO Data</Box>
        </>
      )}
    </Grid>
  );
}
