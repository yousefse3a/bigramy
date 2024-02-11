import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Rating } from "@mui/material";
import img from "../../assets/bigramy.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
export default function EbookCard({ bookDetails }) {
  return (
    <Card sx={{ maxWidth: 200, color: "white", margin: ".5rem" }}>
      <Link to={`/Ebook/${bookDetails.id}`}>
        <CardMedia
          sx={{ height: 200 }}
          image={bookDetails.attributes.book.image_url}
          title="green iguana"
        />
        <CardContent sx={{ background: "#272727 " }}>
          <Typography gutterBottom variant="h5" component="div">
            {bookDetails.attributes.name}
          </Typography>
          <Rating
            name="read-only"
            value={+bookDetails.attributes.num_of_reviews}
            readOnly
            sx={{ fontSize: "1rem", color: "#55e748", border: "red" }}
          />
          <Typography variant="body2">
            USD {bookDetails.attributes.price}
          </Typography>
        </CardContent>

        <CardActions sx={{ background: "#272727", display: "flex" }}>
          <Box
            sx={{
              width: "70%",
              background: "#55e748",
              color: "#272727",
              fontSize: "1rem",
              fontWeight: "500",
              textAlign: "center",
              paddingY: ".5rem",
            }}
          >
            <Link to={`/Ebook/${bookDetails.id}`}>Show Details</Link>
          </Box>
          <Box
            sx={{
              width: "25%",
              background: "#55e748",
              color: "#272727",
              fontSize: "1rem",
              fontWeight: "500",
              display: "flex",
              justifyContent: "center",
              paddingY: ".5rem",
            }}
          >
            <ShoppingCartIcon />
          </Box>
        </CardActions>
      </Link>
    </Card>
  );
}
