{/* <a onclick="changePage('<object type=text/html data=about.html ></object>')">About</a> */}
const changePage = (page) => {
  document.getElementById("content").innerHTML = page;
};
