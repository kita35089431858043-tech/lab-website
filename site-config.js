// 正式名称が決まったら、以下の2行だけ差し替えてください。
const LAB_NAME = "研究室名（仮）";
const AFFILIATION = "所属機関名（仮）";

document.querySelectorAll("[data-lab-name]").forEach((element) => { element.textContent = LAB_NAME; });
document.querySelectorAll("[data-affiliation]").forEach((element) => { element.textContent = AFFILIATION; });
document.getElementById("year").textContent = new Date().getFullYear();
