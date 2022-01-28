const path = require("path");
const express = require("express");
const app = express();


const _PORT = process.env.PORT || 3000;
app.use(
  "/shared/bibliografia-la-logica/",
  express.static(path.join(__dirname, "public"))
);


app.get("/shared/:id/", (req, res) => {
    const { id } = req.params;
    if (id === "bibliografia-la-logica")
        res.sendFile(path.join(__dirname, "public", "index.html"));

    else   res.sendFile(path.join(__dirname, "public", "working-page.html"));

})

app.get("*", function (req, res) {
     res.sendFile(path.join(__dirname, "public", "working-page.html"));
});

app.listen(_PORT, () => {
    console.log(`Server running on http://localhost:${_PORT}`);
})
