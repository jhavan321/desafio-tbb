  let header = document.getElementById("hoverHeader");
  let about = document.getElementById("about");
  let products = document.getElementById("products");
  let health = document.getElementById("health");
  let headerItem = document.querySelector(".sub-header-item-1");
  let headerItem2 = document.querySelector(".sub-header-item-2");
  let headerItem3 = document.querySelector(".sub-header-item-3");

  $(about).hover(
    function () {
      console.log("teste");
      header.style.display = "flex";
      $(header).animate({ height: 50 }, 200).fadeIn(400);
      headerItem.style.visibility = "visible";
      headerItem3.style.display = "none";
      headerItem.style.display = "flex";
      headerItem2.style.display = "none";
      $(header).hover(function () {
        header.style.display = "flex";
      });
    },
    function hideHeader() {
      setTimeout(function () {
        console.log("teste");
        $(header).animate({ height: 0 }, 300);
        headerItem.style.display = "none";
        headerItem2.style.display = "none";
        headerItem3.style.display = "none";
      }, 1500);
    }
  );

  $(products).hover(
    function () {
      clearTimeout();
      console.log("teste");
      header.style.display = "flex";
      $(header).animate({ height: 50 }, 200).fadeIn(400);
      headerItem2.style.visibility = "visible";
      headerItem2.style.display = "flex";
      headerItem3.style.display = "none";
      headerItem.style.display = "none";
    },
    function hideHeader() {
      setTimeout(function () {
        $(header).animate({ height: 0 }, 300);
        headerItem.style.display = "none";
        headerItem2.style.display = "none";
        headerItem3.style.display = "none";
      }, 1500);
    }
  );

  $(health).hover(
    function () {
      header.style.display = "flex";
      $(header).animate({ height: 50 }, 200);
      headerItem3.style.visibility = "visible";

      headerItem.style.display = "none";
      headerItem2.style.display = "none";
      headerItem3.style.display = "flex";
    },
    function hideHeader() {
      setTimeout(function () {
        $(header).animate({ height: 0 }, 300);
        headerItem.style.display = "none";
        headerItem2.style.display = "none";
        headerItem3.style.display = "none";
      }, 2000);
    }
  );