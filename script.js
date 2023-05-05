import data from "./data.json" assert { type: "json" };

for (let i = 0; i < data.length; i++) {
    document.querySelector(".title_" + i).innerHTML = data[i].category;
    document.querySelector(".summary_score_" + i).innerHTML = data[i].score + " / 100";
    document.querySelector(".image_" + i).setAttribute("src", data[i].icon);
}